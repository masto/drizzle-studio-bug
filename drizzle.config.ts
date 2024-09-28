import { type Config } from "drizzle-kit";

export default {
  schema: "./schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  tablesFilter: ["demo_*"],
} satisfies Config;
