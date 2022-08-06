import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";

const outputPath = "./dist";

export default {
  input: "./src/index.ts",
  output: {
    file: outputPath + "/index.js",
    name: "OmpWrapper",
    format: "umd",
  },

  plugins: [del({ targets: outputPath + "/*" }), typescript(), terser()],
};
