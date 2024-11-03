import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { BlogPost } from "@/lib/supabase/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={post.thumbnail_url}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 p-4">
        <Badge className="w-fit" variant="secondary">
          {post.category.name}
        </Badge>
        <div className="space-y-2">
          <h3 className="line-clamp-2 text-lg font-semibold">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar_url} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-sm">
              <span className="font-medium">{post.author.name}</span>
              <span className="text-muted-foreground">
                {formatDistanceToNow(new Date(post.published_at), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{post.reading_time} min read</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}