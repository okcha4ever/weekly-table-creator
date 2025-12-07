import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	createdAt: timestamp("created_at").defaultNow(),
});

export const scheduleTables = pgTable("schedule_tables", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
export type ScheduleTable = typeof scheduleTables.$inferSelect;

export const scheduleRows = pgTable("schedule_rows", {
	id: serial("id").primaryKey(),
	tableId: integer("table_id")
		.references(() => scheduleTables.id, { onDelete: "cascade" })
		.notNull(),
	subject: text("subject").notNull().default(""), // المادة
	day: text("day").notNull().default(""), // اليوم
	timeStart: text("time_start").notNull().default(""), // وقت البداية
	timeEnd: text("time_end").notNull().default(""), // وقت النهاية
	teacher: text("teacher").notNull().default(""), // الأستاذ/الأستاذة
	order: integer("order").notNull().default(0),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});
