import adapter from "@sveltejs/adapter-static"; // was adapter-auto
import sveltePreprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
    }),
    files: {
      lib: "src/lib",
    },
    alias: {
      $components: "src/components",
      $utils: "src/utils",
    },
    paths: {
      base: dev ? "" : "",
    },
    prerender: {
      enabled: true,
      default: true,
    },
    trailingSlash: "never",
  },
  preprocess: sveltePreprocess(),
};

export default config;
