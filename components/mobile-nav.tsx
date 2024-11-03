"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Compass, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className="flex md:hidden">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Compass className="h-6 w-6" />
        <span className="font-bold">Deeper Divers</span>
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="ml-auto h-8 w-8 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setOpen(false)}
            >
              <Compass className="h-6 w-6" />
              <span className="font-bold">Deeper Divers</span>
            </Link>
            <Button
              variant="ghost"
              className="ml-auto h-8 w-8 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close Menu</span>
            </Button>
          </div>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
            <div className="flex flex-col space-y-4">
              <Link
                href="/episodes"
                className={cn(
                  "text-foreground/60 transition-colors hover:text-foreground",
                  pathname === "/episodes" && "text-foreground"
                )}
                onClick={() => setOpen(false)}
              >
                Episodes
              </Link>
              <Link
                href="/blog"
                className={cn(
                  "text-foreground/60 transition-colors hover:text-foreground",
                  pathname === "/blog" && "text-foreground"
                )}
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
              <Button className="w-full" onClick={() => setOpen(false)}>
                Subscribe
              </Button>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}