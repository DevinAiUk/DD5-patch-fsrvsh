import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-background py-24">
        <div className="container relative">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] mb-4">
            About Deeper Divers
          </h1>
          <p className="text-lg text-muted-foreground max-w-[750px]">
            Exploring the depths of knowledge through thoughtful analysis and engaging discussions.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">
                At Deeper Divers, we believe in the power of deep, meaningful conversations. Our mission
                is to explore complex topics through thoughtful analysis and expert insights, making
                challenging subjects accessible to everyone.
              </p>
              <Button asChild>
                <Link href="/episodes">
                  Explore Episodes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Our Values</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Intellectual curiosity and continuous learning</li>
                <li>• Rigorous research and fact-based analysis</li>
                <li>• Engaging and accessible content delivery</li>
                <li>• Diverse perspectives and inclusive discussions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-2xl font-semibold">The Team</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="font-medium">Dr. Sarah Chen</h3>
                  <p className="text-sm text-muted-foreground">
                    Technology and AI specialist with over 15 years of research experience.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Prof. Michael Roberts</h3>
                  <p className="text-sm text-muted-foreground">
                    Environmental scientist focusing on climate change and sustainability.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Emma Thompson</h3>
                  <p className="text-sm text-muted-foreground">
                    Digital privacy advocate and technology ethics researcher.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}