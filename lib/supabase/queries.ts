import { supabase } from './client';
import type { Episode, BlogPost } from './types';

export async function getPublishedEpisodes() {
  const { data, error } = await supabase
    .from('episodes')
    .select(`
      *,
      author:authors(name, avatar_url),
      category:categories(name, slug),
      tags:episodes_tags(tags(id, name))
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data as Episode[];
}

export async function getEpisodeBySlug(slug: string) {
  const { data, error } = await supabase
    .from('episodes')
    .select(`
      *,
      author:authors(name, avatar_url),
      category:categories(name, slug),
      tags:episodes_tags(tags(id, name))
    `)
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data as Episode;
}

export async function getPublishedBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:authors(name, avatar_url),
      category:categories(name, slug),
      tags:blog_posts_tags(tags(id, name))
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data as BlogPost[];
}

export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:authors(name, avatar_url),
      category:categories(name, slug),
      tags:blog_posts_tags(tags(id, name))
    `)
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data as BlogPost;
}

export async function incrementViewCount(type: 'episode' | 'post', id: string) {
  const table = type === 'episode' ? 'episodes' : 'blog_posts';
  const { error } = await supabase.rpc('increment_view_count', {
    content_type: table,
    content_id: id
  });

  if (error) throw error;
}