// import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";
import { auth } from "@/auth";
import { db } from "@/lib/db";

const AuthLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const authClient = createClient();

  // const {error, data: {user}} = await authClient.auth.getUser();
  const session = await auth();

  if (session !== null) {
    redirect("/dashboard/explore");
  }

  return (
    <section>
      <div className="main">
        <div className="gradient" />
      </div>
      <main> {children}</main>
    </section>
  );
};

export default AuthLayout;
