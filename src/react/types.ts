import type { ComponentPropsWithoutRef, ElementType } from 'react'

export type HapticTriggerProps<T extends ElementType> = {
  as?: T
  onTap?: () => void
} & ComponentPropsWithoutRef<T>
