import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye } from "lucide-react";

interface EpisodeDetailsProps {
  title: string;
  description: string;
  publishedAt: string;
  duration: string;
  views: number;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

export function EpisodeDetails({
  title,
  description,
  publishedAt,
  duration,
  views,
  category,
  tags,
  author,
}: EpisodeDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">{author.name}</h4>
              <p className="text-sm text-muted-foreground">
                {formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}
              </p>
            </div>
          </div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex flex-wrap gap-2 text-sm">
            <Badge variant="secondary">{category}</Badge>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span>{views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}