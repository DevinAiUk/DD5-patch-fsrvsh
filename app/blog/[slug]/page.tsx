import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mockBlogPosts } from "@/lib/mock-data";

// Add generateStaticParams
export async function generateStaticParams() {
  // Use mock data since we can't make API calls during static build
  return mockBlogPosts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = mockBlogPosts.find(post => post.id === params.slug);
  
  return {
    title: post ? `${post.title} | Deeper Divers` : 'Blog Post | Deeper Divers',
    description: post?.excerpt || 'Read our latest blog post',
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = mockBlogPosts.find(post => post.id === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Button
          variant="ghost"
          asChild
          className="mb-6 -ml-4 text-muted-foreground hover:text-foreground"
        >
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1>{post.title}</h1>
          <div className="flex items-center gap-4 mt-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
}