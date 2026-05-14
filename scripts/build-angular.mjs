import { execSync } from 'node:child_process'
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const tmp = resolve(root, '.angular_build_tmp')
const distAngular = resolve(root, 'dist/angular')

execSync('node_modules/.bin/ngc -p tsconfig.angular.json', { cwd: root, stdio: 'inherit' })

mkdirSync(distAngular, { recursive: true })

const files = [
  'haptic-trigger.directive.js',
  'haptic-trigger.directive.d.ts',
  'haptic-trigger.component.js',
  'haptic-trigger.component.d.ts',
  'index.js',
  'index.d.ts',
]

for (const file of files) {
  const src = resolve(tmp, 'angular', file)
  const dest = resolve(distAngular, file)

  let content = readFileSync(src, 'utf8')
  content = content.replace(/from\s+(['"])\.\.(?:\/[^'"]*)?['"]/g, `from $1ios-haptics$1`)
  writeFileSync(dest, content)
}

rmSync(tmp, { recursive: true, force: true })
