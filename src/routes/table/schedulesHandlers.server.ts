import { db } from "@/db";
import { scheduleTables } from "@/db/schema";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";

export const getSchedules = createServerFn().handler(async () => {
	const schedules = await db.query.scheduleTables.findMany();
	return schedules;
});

export const findSchedule = createServerFn({ method: "GET" })
	.inputValidator((data: { tableid: string }) => data)
	.handler(async ({ data }) => {
		const schedule = await db.query.scheduleTables.findFirst({
			where: eq(scheduleTables.id, Number(data.tableid)),
		});
		return schedule;
	});
