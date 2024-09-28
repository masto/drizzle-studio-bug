import { sql } from "drizzle-orm";
import {
  index,
  pgTable,
  integer,
  varchar,
} from "drizzle-orm/pg-core";

export const demo = pgTable(
  "demo",
  {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: varchar("name", { length: 30 }),
  },
);
