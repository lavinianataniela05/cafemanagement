// types/next-auth.d.ts atau next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "USER" | "ADMIN";
      type: "staff" | "customer";
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: "USER" | "ADMIN";
    type: "staff" | "customer";
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: "USER" | "ADMIN";
    type: "staff" | "customer";
  }
}