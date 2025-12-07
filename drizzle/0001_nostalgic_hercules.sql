CREATE TABLE "schedule_rows" (
	"id" serial PRIMARY KEY NOT NULL,
	"table_id" integer NOT NULL,
	"subject" text DEFAULT '' NOT NULL,
	"day" text DEFAULT '' NOT NULL,
	"time_start" text DEFAULT '' NOT NULL,
	"time_end" text DEFAULT '' NOT NULL,
	"teacher" text DEFAULT '' NOT NULL,
	"order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "schedule_tables" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "schedule_rows" ADD CONSTRAINT "schedule_rows_table_id_schedule_tables_id_fk" FOREIGN KEY ("table_id") REFERENCES "public"."schedule_tables"("id") ON DELETE cascade ON UPDATE no action;