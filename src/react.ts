import { useCallback } from "react";
import { trigger } from "./core";
import type { HapticType } from "./core";

export function useHaptics() {
  return {
    trigger: useCallback((type?: HapticType) => trigger(type), []),
  };
}

export { trigger };
export type { HapticType };
