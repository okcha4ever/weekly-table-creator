import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/table/view")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/table/view"!</div>;
}
