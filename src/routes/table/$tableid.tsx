import { createFileRoute } from "@tanstack/react-router";
import { findSchedule } from "./schedulesHandlers.server";

export const Route = createFileRoute("/table/$tableid")({
	component: RouteComponent,
	loader: async ({ params }) => {
		// fetch table data
		const table = await findSchedule({
			data: { tableid: params.tableid },
		});
		return table;
	},
});

function RouteComponent() {
	const table = Route.useLoaderData();
	return <div>Hello "/table/{table}"!</div>;
}
