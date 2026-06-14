import type { Component } from 'svelte'
import type { SvelteHTMLElements } from 'svelte/elements'

export type HapticTriggerProps<T extends keyof SvelteHTMLElements> = {
  as?: T
  ontap?: () => void
} & SvelteHTMLElements[T]

export declare const HapticTrigger: Component<HapticTriggerProps<any>>
