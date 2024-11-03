"use client";

import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function EpisodeFilters() {
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Category
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value="all">
            <DropdownMenuRadioItem value="all">
              All Categories
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="technology">
              Technology
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="science">
              Science
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="politics">
              Politics
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="culture">
              Culture
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Duration
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Filter by Duration</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value="all">
            <DropdownMenuRadioItem value="all">
              All Lengths
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="short">
              Under 30 minutes
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="medium">
              30-60 minutes
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="long">
              Over 60 minutes
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}