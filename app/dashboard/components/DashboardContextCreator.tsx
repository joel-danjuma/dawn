"use client";

import React from "react";
import { DashboardAuthCtx } from "../context/DashboardAuthContext";
import { User } from "@supabase/supabase-js";

export function DashboardContextCreator({children, user, token}: {children: React.ReactNode, user: User, token: string}) {
    return <DashboardAuthCtx.Provider value={{user, token}}>
        {children}
    </DashboardAuthCtx.Provider>
}