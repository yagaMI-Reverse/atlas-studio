// GitHub Pages serves 404.html for unknown paths. Copy index.html so client-side
// routing / direct links keep working on a project Pages site.
import { copyFileSync, existsSync } from "node:fs";
if (existsSync("dist/index.html")) {
  copyFileSync("dist/index.html", "dist/404.html");
  console.log("✓ dist/404.html created (SPA fallback)");
}
