// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Global variable to hold Prisma client instance during development
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma ?? new PrismaClient();

// Assign the Prisma client to the global object in development to avoid creating multiple instances
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
