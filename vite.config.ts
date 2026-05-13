import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** На GitHub Pages сайт живёт в подкаталоге /{repo}/ — задаём base из CI. */
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = repo ? `/${repo}/` : "/";

export default defineConfig({
  base,
  plugins: [react()],
});
