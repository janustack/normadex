import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/covenant/')({
    component: Convenant,
	head: () => ({
		meta: [
			{
				title: "Covenant - Normadex",
			},
			{
				name: "description",
				content: "",
			},
		],
	}),
})

function Convenant() {
    return (
        <>
            <header>
                <h1>The Covenant of Code Standards and Conventions by Normadex</h1>
                <p>
                </p>
            </header>
        </>)
}
