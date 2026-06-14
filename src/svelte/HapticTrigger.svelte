<script>
  /** @type {import("./types.ts").HapticTriggerProps<any>} */
  const {
    as,
    ontap,
    children,
    ...props
  } = $props()
</script>

<svelte:element
  this={as ?? 'button'}
  {...props}
  style='
    position: relative;
    display: inline-flex;
  '
>
  {@render children?.()}

  <input
    style='
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      opacity: 0;
      cursor: pointer;
      clip-path: inset(0 round 999px);
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    '
    type='checkbox'
    onchange={ontap}
    // @ts-expect-error - unrecognized attribute
    switch
  />
</svelte:element>
