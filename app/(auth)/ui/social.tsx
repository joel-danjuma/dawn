"use client";
// import { FacebookIcon, GoogleIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

const GoogleLogin = () => {
  const onClick = (provider: string) => {
    signIn(provider, {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className=" flex justify-center lg:space-x-8 space-x-5 items-center py-4">
      <Button onClick={() => onClick("google")} className="w-full bg-blue-400">
        Log in with Google
      </Button>
    </div>
  );
};

export default GoogleLogin;
