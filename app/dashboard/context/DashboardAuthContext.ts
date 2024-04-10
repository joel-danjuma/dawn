import { User } from "@supabase/supabase-js";
import { createContext } from "react";

export const DashboardAuthCtx = createContext<{user?: User, token?: string}>({});