import MyTableWithDownload from "@/components/schedules/DownloadableTableImage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/table/new")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex justify-center items-center">
			<MyTableWithDownload />
		</div>
	);
}
