<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { triggerAndroidHaptic } from '..'

  const { children }: { children: Snippet } = $props()
</script>

<label>
  <input
    type='checkbox'
    // @ts-expect-error
    switch
    style='display: none;'
    onchange={triggerAndroidHaptic}
  />
  {@render children()}
</label>
