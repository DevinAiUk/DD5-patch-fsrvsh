import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";

interface RelatedEpisode {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
}

interface RelatedEpisodesProps {
  episodes: RelatedEpisode[];
  currentEpisodeId: string;
}

export function RelatedEpisodes({ episodes, currentEpisodeId }: RelatedEpisodesProps) {
  const filteredEpisodes = episodes.filter(ep => ep.id !== currentEpisodeId);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Related Episodes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {filteredEpisodes.map((episode) => (
          <Link 
            key={episode.id} 
            href={`/episodes/${episode.id}`}
            className="block"
          >
            <div className="group relative flex gap-4 rounded-lg hover:bg-muted/50 p-2 transition-colors">
              <div className="relative aspect-video w-32 flex-none rounded-md overflow-hidden">
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="object-cover w-full h-full"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-2 right-2 h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-sm font-medium line-clamp-2">{episode.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span className="text-xs">{episode.duration}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}