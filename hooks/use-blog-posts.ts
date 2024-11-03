"use client";

import { useQuery } from "@tanstack/react-query";
import { getPublishedBlogPosts, getBlogPostBySlug } from "@/lib/supabase/queries";

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blog-posts"],
    queryFn: getPublishedBlogPosts,
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: () => getBlogPostBySlug(slug),
  });
}