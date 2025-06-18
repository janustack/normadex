import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/covenant/adopters")({
	component: Adopters,
	head: () => ({
		meta: [
			{
				title: "Adopters - Normadex",
			},
			{
				name: "description",
				content: "",
			},
		],
	}),
});

function Adopters() {
	return (
		<>
			<header>
				<h1>Adopters of the Normadex Covenant</h1>
				<p>Communities that have adopted the Normadex Covenant.</p>
			</header>
		</>
	);
}
