import { defineConfig } from 'tsup'

export default defineConfig(options => [

  {
    entry: {
      index: 'src/index.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    target: 'es2022',
    treeshake: true,
    minify: !options.watch,
  },

  // react
  {
    entry: {
      'react/index': 'src/react/index.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    target: 'es2022',
    treeshake: true,
    external: ['react', 'react/jsx-runtime'],
    minify: !options.watch,
    banner: { js: '"use client";' },
  },

  // vue
  {
    entry: {
      'vue/index': 'src/vue/index.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    target: 'es2022',
    treeshake: true,
    external: ['vue'],
    minify: !options.watch,
  },

  // svelte
  {
    entry: {
      'svelte/index': 'src/svelte/types.ts',
    },
    format: ['cjs', 'esm'],
    dts: {
      only: true,
    },
    external: ['svelte'],
  },
] as const)
