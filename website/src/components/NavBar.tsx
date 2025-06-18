import { Link } from "@tanstack/solid-router";
import { FaBrandsGithub } from 'solid-icons/fa'

const options = ([
	{
		to: "/",
		label: "Normadex",
		activeOptions: { exact: true },
	},
	{
		to: "/covenant",
		label: "Covenant",
	},
	{
		to: "/docs",
		label: "Docs",
	},
])

export default function NavBar() {
	return (
		<nav>
			<div>
				{options.map((option) => {
					return (
						<Link
							{...option}
							to={option.to}
							activeOptions={option.activeOptions}
						>
							{option.label}
						</Link>
					)
				})}
			</div>
			<a href="https://github.com/janustack/normadex"><FaBrandsGithub /></a>
		</nav>
	);
}
