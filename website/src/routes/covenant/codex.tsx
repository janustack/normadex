import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/covenant/codex")({
	component: Codex,
	head: () => ({
		meta: [
			{
				title: "Codex - Normadex",
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
				<p></p>
			</header>

			<a href="https://raw.githubusercontent.com/janustack/std-covenant/main/CODEX.md">
				Markdown
			</a>
		</>
	);
}
