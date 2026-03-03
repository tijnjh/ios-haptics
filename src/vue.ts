import { trigger } from "./core";
import type { HapticType } from "./core";

export function useHaptics() {
  return { trigger };
}

export { trigger };
export type { HapticType };
