import esbuild from "rollup-plugin-esbuild";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import del from "rollup-plugin-delete";
import dts from "rollup-plugin-dts";

const outputPath = "./dist";

export default [
  {
    input: "./src/index.ts",
    output: {
      file: outputPath + "/bundle.js",
      format: "cjs",
    },
    plugins: [
      del({ targets: outputPath + "/*" }),
      esbuild({ minify: true }),
      typescriptPaths({ preserveExtensions: true }),
    ],
  },
  {
    input: "./src/index.ts",
    output: {
      file: outputPath + "/bundle.d.ts",
      format: "cjs",
    },
    plugins: [dts()],
  },
];
