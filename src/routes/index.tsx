import Hero from "@/components/Hero";
import MySeparator from "@/components/ui/myseparator";
import { createFileRoute } from "@tanstack/react-router";
import { getSchedules } from "./table/schedulesHandlers.server";
import ListSchedules from "@/components/ListSchedules";

export const Route = createFileRoute("/")({
	component: App,
	loader: () => getSchedules(),
});

function App() {
	const data = Route.useLoaderData();
	console.log(data);
	return (
		<div className="min-h-screen bg-gray-50 space-y-10 max-w-7xl mx-auto">
			<Hero />
			<MySeparator />
			<ListSchedules schedules={data} />
		</div>
	);
}
