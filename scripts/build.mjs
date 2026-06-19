/**
 * Build @isa-components/neon-glass — CDN bundle + CSS.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const require = createRequire(import.meta.url);
const esbuild = require("../../../apps/src/scripts/node_modules/esbuild");

const CDN_DIR = join(root, "cdn");
const OUT_JS = join(CDN_DIR, "neon-glass.min.js");
const CSS_PAGE = join(root, "css", "neon-glass-page.css");
const CSS_MAIN = join(root, "css", "neon-glass.css");
const OUT_CSS = join(CDN_DIR, "neon-glass.min.css");

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>+~])\s*/g, "$1")
    .trim();
}

function build() {
  mkdirSync(CDN_DIR, { recursive: true });

  esbuild.buildSync({
    entryPoints: [join(root, "src", "index.js")],
    outfile: OUT_JS,
    bundle: true,
    minify: true,
    legalComments: "none",
    target: "es2022",
    format: "esm",
    loader: { ".jsx": "jsx" },
    banner: {
      js: `const React=globalThis.React;const MaterialUI=globalThis.MaterialUI;`,
    },
  });

  writeFileSync(OUT_CSS, minifyCss(readFileSync(CSS_PAGE, "utf8") + readFileSync(CSS_MAIN, "utf8")), "utf8");
  writeFileSync(
    join(CDN_DIR, "versions.json"),
    JSON.stringify({ package: "@isa-components/neon-glass", builtAt: new Date().toISOString() }, null, 2),
    "utf8",
  );

  console.log("neon-glass build OK");
  console.log("  ", OUT_JS);
  console.log("  ", OUT_CSS);
}

build();
