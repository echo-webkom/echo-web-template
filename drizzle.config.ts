import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  out: "./drizzle/migrations",
  schema: "./src/lib/db/schemas.ts",
});
