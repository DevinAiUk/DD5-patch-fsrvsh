"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Compass, Mic2, Newspaper, Search, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommandMenu } from "@/components/command-menu";
import { AuthButton } from "@/components/auth-button";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export function MainNav() {
  const pathname = usePathname();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="mr-4 hidden md:flex md:flex-1">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Compass className="h-6 w-6 text-primary" />
        <span className="hidden font-bold sm:inline-block">
          Deeper Divers
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/episodes"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/episodes" ? "text-foreground" : "text-foreground/60"
          )}
        >
          <div className="flex items-center gap-x-2">
            <Mic2 className="h-4 w-4" />
            <span>Episodes</span>
          </div>
        </Link>
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/blog" ? "text-foreground" : "text-foreground/60"
          )}
        >
          <div className="flex items-center gap-x-2">
            <Newspaper className="h-4 w-4" />
            <span>Blog</span>
          </div>
        </Link>
        <Link
          href="/fact-checker"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/fact-checker" ? "text-foreground" : "text-foreground/60"
          )}
        >
          <div className="flex items-center gap-x-2">
            <CheckCircle className="h-4 w-4" />
            <span>Fact Checker</span>
          </div>
        </Link>
        <CommandMenu />
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <AuthButton session={session} />
      </div>
    </div>
  );
}