import { useState, useRef, useEffect } from "react";
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
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div ref={containerRef} className="relative w-full">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full py-3 px-4 text-center text-gray-700 flex items-center justify-center"
			>
				<span>{value || "اختر اليوم"}</span>
			</button>

			{isOpen && (
				<div className="absolute top-full right-0 left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
					{days.map((day) => (
						<button
							key={day}
							type="button"
							onClick={() => {
								onChange(day);
								setIsOpen(false);
							}}
							className="w-full py-2 px-4 text-center hover:bg-gray-100 text-gray-700"
						>
							{day}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
