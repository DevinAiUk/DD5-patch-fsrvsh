import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Compass className="h-6 w-6" />
              <span className="font-bold">Deeper Divers</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              In-depth analysis and insights on technology, politics, culture, and science.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Content</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/episodes" className="text-sm text-muted-foreground hover:text-foreground">
                Episodes
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/categories" className="text-sm text-muted-foreground hover:text-foreground">
                Categories
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Newsletter</h4>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </div>
            <div className="flex gap-4">
              <a href="https://twitter.com/DeeperDivers" className="text-sm text-muted-foreground hover:text-foreground">
                Twitter
              </a>
              <a href="https://youtube.com/DeeperDivers" className="text-sm text-muted-foreground hover:text-foreground">
                YouTube
              </a>
              <a href="https://instagram.com/DeeperDivers" className="text-sm text-muted-foreground hover:text-foreground">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Deeper Divers. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/search" className="text-sm text-muted-foreground hover:text-foreground">
              Search
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}