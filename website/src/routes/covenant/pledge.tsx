import { createFileRoute } from "@tanstack/solid-router";
import rawMarkdown from '../../../docs/covenant/pledge.md?raw';
import { marked } from "marked";
import { createMemo } from "solid-js";



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

	const markdown = createMemo(() => marked.parse(rawMarkdown));

	return (
		<>
			<header>
				<h1>Pledge to the Normadex Covenant</h1>
				<p></p>
			</header>
			<div innerHTML={markdown()} />
		</>
	);
}
