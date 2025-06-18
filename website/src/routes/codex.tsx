import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/codex")({
	component: Codex,
	head: () => ({
		meta: [
			{
				title: "Codex - STD Covenant",
			},
			{
				name: "description",
				content: "",
			},
		],
	}),
});

function Codex() {
	return (
		<>
			<header>
				<h1>Codex</h1>
				<p>Welcome to the Codex of STD Covenant.</p>
			</header>
            

			<a
				href="https://raw.githubusercontent.com/janustack/std-covenant/main/CODEX.md"
			>
				Markdown
			</a>
		</>
	);
}
