import { Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { FileSpreadsheet } from "lucide-react"; // Declare the FileSpreadsheet variable
import { ScheduleCard } from "./ScheduleCard";
import type { ScheduleTable } from "@/db/schema";

// Mock data - replace with actual data fetching

export default function ListSchedules({
	schedules,
}: {
	schedules: ScheduleTable[];
}) {
	return (
		<div className="space-y-8">
			<div className="flex items-center justify-between" dir="rtl">
				<h1 className="text-2xl font-bold text-foreground">جداولي</h1>
				<Link
					href="/table/new"
					className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
				>
					<Plus className="h-5 w-5" />
					<span>جدول جديد</span>
				</Link>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{schedules.map((schedule) => (
					<ScheduleCard
						key={schedule.id}
						id={schedule.id}
						title={schedule.title}
					/>
				))}
			</div>

			{schedules.length === 0 && (
				<div className="text-center py-12 text-muted-foreground" dir="rtl">
					<FileSpreadsheet className="h-12 w-12 mx-auto mb-4 opacity-50" />
					<p>لا توجد جداول بعد</p>
					<p className="text-sm">أنشئ جدولك الأول للبدء</p>
				</div>
			)}
		</div>
	);
}
