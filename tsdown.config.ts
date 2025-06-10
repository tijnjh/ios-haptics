import { defineConfig } from "tsdown";

import pkg from "./package.json";

const banner = `/**
* ${pkg.name} v${pkg.version}
* tijn.dev
* @license MPL-2.0
**/`;

export default defineConfig({
  entry: ["./src/index.ts"],
  platform: "neutral",
  outputOptions: { banner },
});
