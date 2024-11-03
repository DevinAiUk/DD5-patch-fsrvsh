import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, Beaker, Globe, Palette } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Technology",
    icon: Laptop,
    description: "AI, digital transformation, and emerging tech trends",
    topics: ["Artificial Intelligence", "Cybersecurity", "Digital Privacy", "Future Tech"],
  },
  {
    title: "Science",
    icon: Beaker,
    description: "Latest discoveries and scientific breakthroughs",
    topics: ["Climate Science", "Space Exploration", "Biotechnology", "Physics"],
  },
  {
    title: "Politics",
    icon: Globe,
    description: "Global affairs and policy analysis",
    topics: ["International Relations", "Public Policy", "Democracy", "Social Movements"],
  },
  {
    title: "Culture",
    icon: Palette,
    description: "Arts, media, and societal trends",
    topics: ["Digital Culture", "Media Analysis", "Social Impact", "Creative Arts"],
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-background py-24">
        <div className="container relative">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] mb-4">
            Categories
          </h1>
          <p className="text-lg text-muted-foreground max-w-[750px]">
            Explore our content organized by topic and field of study.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.topics.map((topic) => (
                    <Button key={topic} variant="secondary" size="sm" asChild>
                      <Link href={`/categories/${topic.toLowerCase().replace(/\s+/g, '-')}`}>
                        {topic}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}