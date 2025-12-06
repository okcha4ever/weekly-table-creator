import MyTableWithDownload from "@/components/DownloadableTableImage";
// import { EditableTable } from "@/components/editable-table";
import Hero from "@/components/Hero";
import MySeparator from "@/components/ui/myseparator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="min-h-screen bg-gray-50 space-y-10">
			<Hero />
			<MySeparator />
			{/* <EditableTable /> */}
			<MyTableWithDownload />
		</div>
	);
}
