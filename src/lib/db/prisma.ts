import {PrismaClient} from "@prisma/client";

/**
 * Prevent multiple instances of Prisma Client in development.
 *
 * @see https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
