"use client";
// import { FacebookIcon, GoogleIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { GoogleIcon } from "@/public/icons/Google";

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const GoogleLogin = () => {
  const onClick = (provider: string) => {
    signIn(provider, {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className=" flex justify-center lg:space-x-8 space-x-5 items-center py-4">
      <Button
        onClick={() => onClick("google")}
        className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full dark:text-white hover:text-cyan-500 text-black rounded-md h-10 font-medium shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      >
        Google
        <BottomGradient />
      </Button>
    </div>
  );
};

export default GoogleLogin;
