<script lang='ts'>
  import type { Snippet } from 'svelte'
  import './layout.css'

  const { children }: { children: Snippet } = $props()
</script>

<div class='p-6 mt-12 flex flex-col gap-4 mx-auto max-w-3xl'>
  {@render children()}
</div>
