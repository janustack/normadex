import { Link } from "@tanstack/solid-router";

export default function NavBar() {
	return (
		<nav>
			<Link to="/">Normadex</Link>
			<Link to="/covenant">Covenant</Link>
		</nav>
	);
}
