"use client";

import React from "react";
import { DashboardAuthCtx } from "../context/DashboardAuthContext";
import { User } from "next-auth";
import { JWT } from "@auth/core/jwt";

export function DashboardContextCreator({
  children,
  user,
  token,
}: {
  children: React.ReactNode;
  user: User;
  token: JWT;
}) {
  return (
    <DashboardAuthCtx.Provider value={{ user, token }}>
      {children}
    </DashboardAuthCtx.Provider>
  );
}
