import { defineConfig } from "astro/config";

const base = process.env.BASE_PATH ?? "/";

// https://astro.build/config
export default defineConfig({
  site: "https://danganhuh.github.io",
  base,
  output: "static"
});
