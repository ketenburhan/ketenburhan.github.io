import adapter from "@sveltejs/adapter-static"; // was adapter-auto

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
    }),
    paths: {
      base: dev ? "" : "",
    },
    prerender: {
      enabled: true,
      default: true,
    },
    trailingSlash: "never",
  },
};

export default config;
