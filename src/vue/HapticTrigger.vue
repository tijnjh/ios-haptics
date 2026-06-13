<script setup lang='ts' generic="T extends keyof IntrinsicElementAttributes">
import type { IntrinsicElementAttributes } from 'vue'

const { as, ...props } = defineProps<{
  as?: T
} & IntrinsicElementAttributes[T]>()

const emit = defineEmits<{
  (e: 'tap'): void
}>()
</script>

<template>
  <component
    :is="as ?? 'button'"
    v-bind="props"
    :style="{
      position: 'relative',
      display: 'inline-flex',
    }"
  >
    <slot />

    <input
      :style="{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        opacity: 0,
        cursor: 'pointer',
        clipPath: 'inset(0 round 999px)',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
      }"
      type="checkbox"
      switch
      @change="emit('tap')"
    >
  </component>
</template>
