import { defineConfig } from "astro/config";

const isProductionBuild = process.env.NODE_ENV === "production";
const base = process.env.BASE_PATH ?? (isProductionBuild ? "/tum-web-lab2" : "/");

// https://astro.build/config
export default defineConfig({
  site: "https://danganhuh.github.io/tum-web-lab2",
  base,
  output: "static"
});
