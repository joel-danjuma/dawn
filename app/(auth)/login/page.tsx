import { login } from "@/app/actions/auth/action";
import { Button, Input, input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const LogIn = () => {
  return (
    <div className="grid place-items-center h-screen">
      <form className="flex gap-2 flex-col bg-white/5 border-2 border-white/20 rounded-lg p-10" action={login}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="outline-none p-2 bg-transparent border-1 border-white/20 rounded-md" required/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" className="outline-none p-2 bg-transparent border-1 border-white/20 rounded-md" required/>
        <Button role="submit" type="submit">
          Log In
        </Button>
        <Button>
          <Link href="/usedawn">Sign Up</Link>
        </Button>
      </form>
    </div>
  );
};

export default LogIn;
