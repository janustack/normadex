import { resolve } from "node:path";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindCSS from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		solid(),
		TanStackRouterVite({ target: "solid", autoCodeSplitting: true }),
		tailwindCSS(),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	server: {
		port: 9705,
	},
});
