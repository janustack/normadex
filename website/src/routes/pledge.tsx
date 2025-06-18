import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/pledge")({
	component: Pledge,
	head: () => ({
		meta: [
			{
				title: "Pledge - STD Covenant",
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
				<h1></h1>
				<p></p>
			</header>
		</>
	);
}
