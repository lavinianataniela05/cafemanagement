import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { prisma } from "./prisma"; // Pastikan path ini benar

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Cari user di Staff
        const staff = await prisma.staff.findUnique({
          where: { email: credentials.email }
        });

        // Jika staff ditemukan
        if (staff) {
          // Gunakan compare untuk verifikasi password
          const passwordValid = await compare(credentials.password, staff.password);
          if (!passwordValid) return null;

          return {
            id: String(staff.id),
            email: staff.email,
            name: staff.name,
            role: staff.role,
            type: "staff"
          };
        }

        // Cari di Customer jika tidak ditemukan di Staff
        const customer = await prisma.customer.findUnique({
          where: { email: credentials.email }
        });

        if (customer) {
          const passwordValid = await compare(credentials.password, customer.password);
          if (!passwordValid) return null;

          return {
            id: String(customer.id),
            email: customer.email,
            name: customer.nama,
            role: customer.role,
            type: "customer"
          };
        }

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.type = token.type;
      return session;
    }
  }
};