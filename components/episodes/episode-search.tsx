"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function EpisodeSearch() {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search episodes..."
        className="pl-8"
      />
    </div>
  );
}