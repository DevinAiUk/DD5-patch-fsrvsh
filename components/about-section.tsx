import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass } from "lucide-react";

export function AboutSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Compass className="h-5 w-5" />
          About Deeper Divers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Deeper Divers is your source for in-depth analysis and insights on technology,
          politics, culture, and science. We dive deep into today's most important topics
          to bring you thoughtful perspectives and expert analysis.
        </p>
        <p className="text-sm text-muted-foreground">
          Join our community of curious minds and engage with content that matters.
        </p>
      </CardContent>
    </Card>
  );
}