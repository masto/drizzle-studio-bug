# Demo: Drizzle Studio incompatibility with generatedAlwaysAsIdentity

Reproduction test case for bug:

If I define my primary key with .generatedAlwaysAsIdentity(), it seems
like I can't add any records in Drizzle Studio because it tries to set
the value of the column. This results in an error: cannot insert a
non-DEFAULT value into column "id"

<https://discord.com/channels/1043890932593987624/1289348470737473587>
