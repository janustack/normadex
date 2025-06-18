import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/adopters")({
	component: Adopters,
	head: () => ({
		meta: [
			{
				title: "Adopters - STD Covenant",
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
				<h1>Adopters</h1>
				<p>Communities that have adopted the STD Covenant.</p>
			</header>
		</>
	);
}
