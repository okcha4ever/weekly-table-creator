import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const days = [
	"السبت",
	"الأحد",
	"الإثنين",
	"الثلاثاء",
	"الأربعاء",
	"الخميس",
	"الجمعة",
];

interface DayPickerProps {
	value: string;
	onChange: (day: string) => void;
}

export function DayPicker({ value, onChange }: DayPickerProps) {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger className="w-full border-none shadow-none text-center justify-center [&>svg]:hidden">
				<SelectValue placeholder="اختر اليوم" />
			</SelectTrigger>
			<SelectContent>
				{days.map((day) => (
					<SelectItem
						key={day}
						value={day}
						className="flex justify-end items-end"
					>
						{day}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
