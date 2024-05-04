import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "@auth/core/jwt";
import { UserRole } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  token: JWT;
  nativeLanguage: string;
  targetLanguage: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
