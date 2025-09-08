import { defineConfig } from 'tsdown'

import pkg from './package.json' with { type: 'json' }

const banner = `/**
* ${pkg.name} v${pkg.version}
* tijn.dev
* @license ${pkg.license}
**/`

export default defineConfig({
  entry: ['./src/index.ts', './src/index.d.ts'],
  platform: 'neutral',
  outputOptions: { banner },
  dts: true,
})
