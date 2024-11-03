"use client";

import { useEpisodes } from "@/hooks/use-episodes";
import { EpisodeGrid } from "@/components/episodes/episode-grid";
import { EpisodeFilters } from "@/components/episodes/episode-filters";
import { EpisodeSearch } from "@/components/episodes/episode-search";
import { Skeleton } from "@/components/ui/skeleton";

export default function EpisodesPage() {
  const { data: episodes, isLoading } = useEpisodes();

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-6 w-96" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Skeleton className="h-10 w-64" />
              <Skeleton className="h-10 w-48" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="aspect-video w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Episodes</h1>
          <p className="text-muted-foreground">
            Explore our collection of in-depth analysis and discussions.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <EpisodeSearch />
            <EpisodeFilters />
          </div>
          <EpisodeGrid episodes={episodes || []} />
        </div>
      </div>
    </div>
  );
}