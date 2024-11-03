"use client";

import { useQuery } from "@tanstack/react-query";
import { getPublishedEpisodes, getEpisodeBySlug } from "@/lib/supabase/queries";

export function useEpisodes() {
  return useQuery({
    queryKey: ["episodes"],
    queryFn: getPublishedEpisodes,
  });
}

export function useEpisode(slug: string) {
  return useQuery({
    queryKey: ["episode", slug],
    queryFn: () => getEpisodeBySlug(slug),
  });
}