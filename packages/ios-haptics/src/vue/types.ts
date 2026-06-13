import type { IntrinsicElementAttributes } from 'vue'

export type HapticTriggerProps<T extends keyof IntrinsicElementAttributes> = {
  as?: T
} & IntrinsicElementAttributes[T]
