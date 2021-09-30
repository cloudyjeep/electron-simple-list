import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../resource",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1e5, // max 10mb
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  },
  plugins: [
    preact(),
    {
      name: "resove-url-source",
      transformIndexHtml(html) {
        let regex = /(src|href)\=(\"|\')\//gi;
        return html.replace(regex, (a) => a.replace("/", "./"));
      },
    },
  ],
});
