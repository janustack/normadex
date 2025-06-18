import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
	component: App,
	head: () => ({
		meta: [
			{
				title: "Normadex",
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
				<h1>Normadex</h1>
				<p></p>
			</header>
		</>
	);
}
