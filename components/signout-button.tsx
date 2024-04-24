"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SignOutButton() {
  return (
    <Button className="w-full gap-1.5 text-sm" onClick={() => signOut()}>
      Signout
    </Button>
  );
}
