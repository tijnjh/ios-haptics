<script lang='ts'>
  import { snippets } from '$lib/snippets'
  import NumericText from '@numeric-text/svelte'
  import { sg } from '../lib/utils'

  const frameworks = [
    'react',
    'svelte',
    'vue',
  ] as const

  const packageManagers = {
    npm: 'i',
    deno: 'add',
    pnpm: 'add',
    bun: 'add',
    yarn: 'add',
  } as const

  let currentPackageManager = $state<keyof typeof packageManagers>('npm')
  let selectedFramework = $state<(typeof frameworks)[number]>('react')

</script>

<h1 class='font-mono text-xl'>
  <pre>&lt;HapticTrigger /&gt;</pre>
</h1>

<h3 class='mt-8'>install</h3>

<div class='gap-4 flex'>
  {#each sg.Object.keys(packageManagers) as pm (pm)}
    <button
      class={[
        currentPackageManager === pm ? '' : 'text-zinc-400-600',
        'cursor-pointer',
      ]}
      onclick={() => {
        currentPackageManager = pm
      }}
    >
      {pm}
    </button>
  {/each}
</div>

<div class='flex gap-2 font-mono items-center px-3 py-2 bg-zinc-200-800 rounded-xl'>
  <span class='opacity-50'>$</span>
  <NumericText
    value={`${currentPackageManager} ${packageManagers[currentPackageManager]} ios-haptics`}
  />
</div>

<h3 class='mt-8'>examples</h3>

<div class='gap-4 flex'>
  {#each frameworks as pv (pv)}
    <button
      class={[
        selectedFramework === pv ? '' : 'text-zinc-400-600',
        'cursor-pointer',
      ]}
      onclick={() => {
        selectedFramework = pv
      }}
    >
      {pv}

    </button>
  {/each}
</div>

<div class='px-3 py-2 bg-zinc-200-800 rounded-xl overflow-scroll'>
  <pre class=''>{snippets[selectedFramework]}</pre>
</div>

<footer class='mt-8'>
  <a href='https://github.com/tijnjh/ios-haptics' class='not-hover:text-zinc-400-600'>github</a>
</footer>
