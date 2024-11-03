import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/video/video-player";
import { EpisodeDetails } from "@/components/episode-details";
import { RelatedEpisodes } from "@/components/related-episodes";
import { mockEpisodes } from "@/lib/mock-data";

// Add generateStaticParams
export async function generateStaticParams() {
  // Use mock data since we can't make API calls during static build
  return mockEpisodes.map((episode) => ({
    slug: episode.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const episode = mockEpisodes.find(ep => ep.id.toString() === params.slug);
  
  return {
    title: episode ? `${episode.title} | Deeper Divers` : 'Episode | Deeper Divers',
    description: episode?.description || 'Watch our latest episode',
  };
}

export default function EpisodePage({ params }: { params: { slug: string } }) {
  const episode = mockEpisodes.find(ep => ep.id.toString() === params.slug);

  if (!episode) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Episode not found</h1>
          <Button asChild>
            <Link href="/episodes">Back to Episodes</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          asChild
          className="mb-6 -ml-4 text-muted-foreground hover:text-foreground"
        >
          <Link href="/episodes" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Episodes
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div id="main-video">
              <VideoPlayer
                src={episode.videoUrl}
                poster={episode.thumbnail}
                autoPlay={false}
              />
            </div>
            
            <EpisodeDetails
              title={episode.title}
              description={episode.description}
              publishedAt={episode.date}
              duration={episode.duration}
              views={episode.views}
              category={episode.category}
              tags={["Technology", "AI", "Future"]} // Example tags
              author={{
                name: episode.author.name,
                avatar: episode.author.avatar
              }}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Related Episodes</h2>
            <RelatedEpisodes 
              episodes={mockEpisodes.filter(ep => ep.id !== episode.id).slice(0, 3).map(ep => ({
                id: ep.id.toString(),
                title: ep.title,
                duration: ep.duration,
                thumbnail: ep.thumbnail
              }))}
              currentEpisodeId={episode.id.toString()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}