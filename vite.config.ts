// Plain Vite + TanStack Start config, built as a static SPA for Vercel.
// Output: dist/client (index shell is dist/client/_shell.html, see vercel.json).
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      // SPA mode: no server is needed in production. The app shell is
      // prerendered at build time and the browser renders every route.
      spa: { enabled: true },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
