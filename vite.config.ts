import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// base must match the GitHub Pages repo name: https://<user>.github.io/atlas-studio/
export default defineConfig({
  base: "/atlas-studio/",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
