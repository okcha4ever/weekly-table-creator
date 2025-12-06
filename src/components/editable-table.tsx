"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TimeRangePicker } from "@/components/time-range-picker";
import { DayPicker } from "@/components/day-picker";

const initialHeaders = ["المادة", "اليوم", "الوقت", "الأستاذ/الأستاذة"];

const initialData = [
	{ id: 1, col1: "", col2: "", startTime: "", endTime: "", col4: "" },
	{ id: 2, col1: "", col2: "", startTime: "", endTime: "", col4: "" },
	{ id: 3, col1: "", col2: "", startTime: "", endTime: "", col4: "" },
	{ id: 4, col1: "", col2: "", startTime: "", endTime: "", col4: "" },
	{ id: 5, col1: "", col2: "", startTime: "", endTime: "", col4: "" },
	{ id: 6, col1: "", col2: "", startTime: "", endTime: "", col4: "" },
];

export function EditableTable() {
	const [rows, setRows] = useState(initialData);

	const addRow = () => {
		const newId = rows.length > 0 ? Math.max(...rows.map((r) => r.id)) + 1 : 1;
		setRows([
			...rows,
			{
				id: newId,
				col1: "",
				col2: "",
				startTime: "",
				endTime: "",
				col4: "",
			},
		]);
	};

	const updateCell = (rowId: number, column: string, value: string) => {
		setRows(
			rows.map((row) => (row.id === rowId ? { ...row, [column]: value } : row)),
		);
	};

	return (
		<section className="w-full max-w-4xl mx-auto p-6" dir="rtl">
			<h2 className="text-2xl md:text-3xl font-bold text-center mb-8 underline underline-offset-8 decoration-2">
				مراجعة إختبارات الفصل الأول السنة الثانية متوسط
			</h2>

			<div className="w-full">
				<div className="grid grid-cols-4 bg-black text-white rounded-sm overflow-hidden mb-2">
					{initialHeaders.map((header, index) => (
						<div
							key={index}
							className="py-3 px-4 text-center font-medium text-sm md:text-base"
						>
							{header}
						</div>
					))}
				</div>

				<div className="space-y-2">
					{rows.map((row) => (
						<div key={row.id} className="grid grid-cols-4 gap-2">
							<input
								type="text"
								value={row.col1}
								onChange={(e) => updateCell(row.id, "col1", e.target.value)}
								className="py-3 px-4 text-center border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-gray-400"
								placeholder=""
							/>
							<div className="border border-gray-300 rounded-lg bg-white">
								<DayPicker
									value={row.col2}
									onChange={(day) => updateCell(row.id, "col2", day)}
								/>
							</div>
							<div className="py-2 px-2 border border-gray-300 rounded-lg bg-white flex items-center justify-center">
								<TimeRangePicker
									startTime={row.startTime}
									endTime={row.endTime}
									onStartTimeChange={(time) =>
										updateCell(row.id, "startTime", time)
									}
									onEndTimeChange={(time) =>
										updateCell(row.id, "endTime", time)
									}
								/>
							</div>
							<input
								type="text"
								value={row.col4}
								onChange={(e) => updateCell(row.id, "col4", e.target.value)}
								className="py-3 px-4 text-center border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-gray-400"
								placeholder=""
							/>
						</div>
					))}
				</div>
			</div>

			<div className="mt-6 flex justify-center">
				<Button
					onClick={addRow}
					variant="outline"
					className="gap-2 bg-transparent"
				>
					<Plus className="h-4 w-4" />
					إضافة صف
				</Button>
			</div>
		</section>
	);
}
