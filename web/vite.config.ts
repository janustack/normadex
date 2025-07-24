import solid from "@plugwalk/vite-solid";
import configPaths from "@janustack/vite-config-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindCSS from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({ target: "solid", autoCodeSplitting: true }),
		solid(),
		tailwindCSS(),
		configPaths()
	],
	server: {
		port: 9705,
	},
});
