import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { FileSpreadsheet } from "lucide-react";

interface ScheduleCardProps {
	id: number;
	title: string;
}

export function ScheduleCard({ id, title }: ScheduleCardProps) {
	return (
		<Link to={`/table/${id}`}>
			<Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-2 border-muted hover:border-foreground/20">
				<CardHeader className="flex flex-row items-center gap-4">
					<div className="p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
						<FileSpreadsheet className="h-6 w-6 text-foreground/70" />
					</div>
					<CardTitle
						className="text-lg font-semibold text-foreground/90 group-hover:text-foreground transition-colors line-clamp-2"
						dir="rtl"
					>
						{title}
					</CardTitle>
				</CardHeader>
			</Card>
		</Link>
	);
}
