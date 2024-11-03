"use client";

import { EpisodeCard } from "@/components/episodes/episode-card";
import { FloatingPiP } from "@/components/episodes/floating-pip";
import type { Episode } from "@/lib/supabase/types";

interface EpisodeGridProps {
  episodes: Episode[];
}

export function EpisodeGrid({ episodes }: EpisodeGridProps) {
  // Get the latest episode (first in the array)
  const latestEpisode = episodes[0];

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
      
      {latestEpisode && (
        <FloatingPiP
          videoUrl={latestEpisode.video_url}
          thumbnail={latestEpisode.thumbnail_url}
          slug={latestEpisode.slug}
        />
      )}
    </>
  );
}