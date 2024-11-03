"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { LogIn, LogOut } from "lucide-react";

export function AuthButton({ session }: { session: any }) {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/auth");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return session ? (
    <Button variant="ghost" size="sm" onClick={handleSignOut}>
      <LogOut className="h-4 w-4 mr-2" />
      Sign Out
    </Button>
  ) : (
    <Button variant="default" size="sm" onClick={handleSignIn}>
      <LogIn className="h-4 w-4 mr-2" />
      Sign In
    </Button>
  );
}