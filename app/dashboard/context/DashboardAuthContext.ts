import { User } from "next-auth";
import { JWT } from "@auth/core/jwt";
import { createContext } from "react";

export const DashboardAuthCtx = createContext<{ user?: User; token?: JWT }>({});
