import { db } from "@/lib/db";
import { LingoletteClient } from "@/lib/lingolette";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    const authClient = createClient();

  const {
    error,
    data: { user },
  } = await authClient.auth.getUser();

  if (!user) {
    return NextResponse.json({error: "User not authenticated"});
  }

  const lingoletteCredentials = await db.lingoletteCredential.findUnique({
    where: { userid: user!!.id },
  });

  if (!lingoletteCredentials) {
    return NextResponse.json({error: "Error fetching user credentials"})
  }

  const tokenResult = await LingoletteClient.call("org", "createUserSession", {
    userId: lingoletteCredentials?.id,
  });

  if (!tokenResult.data) {
    console.error("Lingolette error", tokenResult);
    return NextResponse.json({error: "Failed to create ai and user session. Try again later"});
  }

  const token = tokenResult.data as { token: string };

  return NextResponse.json({token: token.token, user: user})
}