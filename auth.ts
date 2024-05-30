import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import NextAuth from "next-auth";
import { UserRole } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { LoginSchema, RegisterSchema } from "./schemas";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
      type: "email",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    const validatedFields = LoginSchema.safeParse(credentials);

    if (validatedFields.success) {
      const { email, password } = validatedFields.data;

      const user = await db.user.findUnique({
        where: {
          email,
        },
      });
      if (!user || !user.password) {
        const newUser = await db.user.create({
          data: {
            email,
            password,
          },
        });
        return newUser;
      }
      // if (!user || user.password) return null
      const passwordsMatch = await bcrypt.compare(password, user.password);
      if (passwordsMatch) {
        return user;
      }
    }
    return null;
  },
});

const config = {
  providers: [Google, credentialsConfig],
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        return true;
      }
      return true;
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token && session.user) {
        session.user.nativeLanguage = token.userLanguage as string;
        session.user.targetLanguage = token.targetLanguage as string;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      if (token) {
        session.user.token = token;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await db.user.findUnique({
        where: {
          id: token.sub,
        },
      });
      const lingo = await db.lingoletteCredential.findUnique({
        where: {
          userid: token.sub,
        },
      });

      if (!existingUser) return token;
      token.userLanguage = lingo?.nativeLng;
      token.targetLanguage = lingo?.targetLng;
      token.role = existingUser.role;
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
