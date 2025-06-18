import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
	component: App,
	head: () => ({
		meta: [
			{
				title: "STD Covenant",
			},
			{
				name: "description",
				content: "",
			},
		],
	}),
});

function App() {
	return (
		<>
			<header>
				<h1>STD Covenant</h1>
			</header>
		</>
	);
}
