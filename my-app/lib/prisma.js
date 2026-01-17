import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

const createPrismaClient = () => {
  return new PrismaClient({
    log: ["warn", "error"],
  });
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
