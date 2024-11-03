import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';
import { z } from 'zod';

// Schema for blog post validation
const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  slug: z.string().min(1, "Slug is required").max(255),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  thumbnail_url: z.string().url("Invalid thumbnail URL"),
  category_id: z.string().uuid("Invalid category ID"),
  author_id: z.string().uuid("Invalid author ID"),
  status: z.enum(["draft", "published", "archived"]),
  reading_time: z.number().min(1, "Reading time must be at least 1 minute"),
  tags: z.array(z.string().uuid("Invalid tag ID")).optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const validatedData = blogPostSchema.parse(json);

    // Start a transaction
    const { data: post, error: postError } = await supabase
      .from('blog_posts')
      .insert([{
        ...validatedData,
        published_at: validatedData.status === 'published' ? new Date().toISOString() : null,
      }])
      .select()
      .single();

    if (postError) throw postError;

    // If tags are provided, create the relationships
    if (validatedData.tags?.length) {
      const tagRelations = validatedData.tags.map(tagId => ({
        post_id: post.id,
        tag_id: tagId,
      }));

      const { error: tagsError } = await supabase
        .from('blog_posts_tags')
        .insert(tagRelations);

      if (tagsError) throw tagsError;
    }

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Blog post creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'published';
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    const { data: posts, error, count } = await supabase
      .from('blog_posts')
      .select(`
        *,
        author:authors(name, avatar_url),
        category:categories(name, slug),
        tags:blog_posts_tags(tags(id, name))
      `, { count: 'exact' })
      .eq('status', status)
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;

    return NextResponse.json({
      posts,
      total: count,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Blog posts fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}