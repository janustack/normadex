import { Link } from "@tanstack/solid-router";

export default function NavBar() {
	return (
		<nav>
			<Link to="/">STD Covenant</Link>
			<Link to="/codex">Codex</Link>
		</nav>
	);
}
