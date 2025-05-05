const fs = require("fs")
const { build } = require("esbuild");
const sassPlugin = require("esbuild-plugin-sass");

const { dependencies ,peerDependencies } = require("./package.json")

;(async () => {
  await build({
    entryPoints: ["src/lib/index.tsx"],
    outdir: "dist",
    bundle: true,
    format: "esm",
    external: Object.keys({
      ...dependencies,
      ...peerDependencies
    }),
    plugins: [sassPlugin()],
  })
  fs.appendFileSync('./dist/index.js', 'import "./index.css"')
})()