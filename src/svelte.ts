import { trigger } from "./core";
import type { HapticType } from "./core";

export function useHaptics() {
  return { trigger };
}

/** Svelte action — use:haptic */
export function haptic(node: HTMLElement, type: HapticType = "light") {
  function handler() {
    trigger(type);
  }
  node.addEventListener("click", handler);
  return {
    update(newType: HapticType) {
      type = newType;
    },
    destroy() {
      node.removeEventListener("click", handler);
    },
  };
}

export { trigger };
export type { HapticType };
