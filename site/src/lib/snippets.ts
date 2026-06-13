export const snippets = {

  react: `import { HapticTrigger } from 'ios-haptics/react
import { useState } from 'react'

export function Foo() {
  const [count, setCount] = useState(0)

  return (
    <HapticButton onTap={() => setCount((prev) => prev + 1)}>
      {count}
    </HapticButton>
  )
}`,

  svelte: `<script lang='ts'>
import { HapticTrigger } 'ios-haptics/svelte'

let count = $state(0)
</script>


<HapticButton ontap={() => count++}>
  {count}
</HapticButton>`,

  vue: `<script setup lang='ts'>
import { HapticTrigger } 'ios-haptics/vue'
import { ref } 'vue'

const count = ref(0)
</script>

<template>
    <HapticButton @tap="count++">
      {count}
    </HapticButton>
</template>`,
} as const
