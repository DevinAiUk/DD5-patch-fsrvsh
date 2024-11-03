import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface PopularTagsProps {
  tags: Array<{
    id: string;
    name: string;
    count: number;
  }>;
}

export function PopularTags({ tags }: PopularTagsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Tag className="h-5 w-5" />
          Popular Tags
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag.id} href={`/blog/tag/${tag.name.toLowerCase()}`}>
              <Badge variant="secondary" className="cursor-pointer">
                {tag.name} ({tag.count})
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}