import { MoveLeft } from "lucide-react";

interface TimeRangePickerProps {
	startTime: string;
	endTime: string;
	onStartTimeChange: (time: string) => void;
	onEndTimeChange: (time: string) => void;
}

export function TimeRangePicker({
	startTime,
	endTime,
	onStartTimeChange,
	onEndTimeChange,
}: TimeRangePickerProps) {
	return (
		<div className="flex items-center justify-center gap-1 w-full" dir="ltr">
			{/* End Time Input */}
			<input
				type="text"
				value={endTime}
				onChange={(e) => onEndTimeChange(e.target.value)}
				placeholder="--:--"
				className="w-16 py-1  rounded-md bg-white text-sm text-center focus:outline-none "
			/>

			{/* <span className="text-gray-500 text-sm">{" <--- "}</span> */}
			<MoveLeft />

			{/* Start Time Input */}
			<input
				type="text"
				value={startTime}
				onChange={(e) => onStartTimeChange(e.target.value)}
				placeholder="--:--"
				className="w-16 py-1  rounded-md bg-white text-sm text-center focus:outline-none "
			/>
		</div>
	);
}
