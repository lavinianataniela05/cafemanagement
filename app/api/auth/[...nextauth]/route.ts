// // app/api/auth/[...nextauth]/route.ts

// import NextAuth from "next-auth"
// import { authOptions } from "@/lib/auth"

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }
// app/api/auth/[...nextauth]/route.ts
import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

import { authHandlers } from "@/lib/auth"; // Update the import to match the correct exported member

export { authHandlers as GET, authHandlers as POST }; // Export the correct handlers