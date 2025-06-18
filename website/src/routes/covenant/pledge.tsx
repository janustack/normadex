import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/covenant/pledge")({
	component: Pledge,
	head: () => ({
		meta: [
			{
				title: "Pledge - Normadex",
			},
			{
				name: "description",
				content: "",
			},
		],
	}),
});

function Pledge() {
	return (
		<>
			<header>
				<h1>Pledge to the Normadex Covenant</h1>
				<p></p>
			</header>
		</>
	)
}
