# Demo: Drizzle Studio incompatibility with generatedAlwaysAsIdentity

Reproduction test case for bug:

If I define my primary key with .generatedAlwaysAsIdentity(), it seems
like I can't add any records in Drizzle Studio because it tries to set
the value of the column. This results in an error: cannot insert a
non-DEFAULT value into column "id"

Steps:

* Create a PostgreSQL database to test with, and obtain its URL.
* echo 'DATABASE_URL="postgresql://postgres:password@localhost:5432/demo"' > .env
* pnpm run db:push
* pnpm run db:studio
* Open Drizzle Studio and try to add a row to the `demo` table.

Expected behavior:

* The `id` column should be left DEFAULT and it should be possible to add a row.

Observed behavior:

* The `id` column is forced to be NULL and any attempt to save a new row results in the error: `cannot insert a non-DEFAULT value into column "id"`

<https://discord.com/channels/1043890932593987624/1289348470737473587>
