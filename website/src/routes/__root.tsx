import {
	HeadContent,
	Link,
	Outlet,
	createRootRoute,
} from "@tanstack/solid-router";

import NavBar from "@/components/NavBar.tsx";
import Footer from "@/components/Footer.tsx";

export const Route = createRootRoute({
	component: Root,
	notFoundComponent: () => {
		return (
			<div>
				<p>Page Not Found!</p>
				<Link to="/">Start Over</Link>
			</div>
		);
	},
});

function Root() {
	return (
		<>
			<HeadContent />
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}
