import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const authClient = createClient();

  const {error, data: {user}} = await authClient.auth.getUser();

  if (user !== null) {
    redirect("/dashboard")
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
