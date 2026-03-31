import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const distSvelte = resolve(root, 'dist/svelte')

mkdirSync(distSvelte, { recursive: true })

let svelte = readFileSync(resolve(root, 'src/svelte/HapticTrigger.svelte'), 'utf8')
svelte = svelte
  .replace(`from '..'`, `from 'ios-haptics'`)
writeFileSync(resolve(distSvelte, 'HapticTrigger.svelte'), svelte)

const entry = `export { default as HapticTrigger } from "./HapticTrigger.svelte";\n`
writeFileSync(resolve(distSvelte, 'index.mjs'), entry)
writeFileSync(resolve(distSvelte, 'index.js'), entry)
copyFileSync(resolve(root, 'src/svelte/index.d.ts'), resolve(distSvelte, 'index.d.ts'))
copyFileSync(resolve(root, 'src/svelte/HapticTrigger.svelte.d.ts'), resolve(distSvelte, 'HapticTrigger.svelte.d.ts'))
