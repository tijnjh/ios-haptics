export { supportsHaptics, trigger } from "./core";
export type { HapticType } from "./core";
import { singleHaptic, confirmHaptic, errorHaptic } from "./core";

function _haptic() {
  singleHaptic();
}

_haptic.confirm = confirmHaptic;
_haptic.error = errorHaptic;

// prevent intellisense from being unhelpful
interface haptic {
  /** @deprecated */
  apply: never;
  /** @deprecated */
  arguments: never;
  /** @deprecated */
  bind: never;
  /** @deprecated */
  call: never;
  /** @deprecated */
  caller: never;
  /** @deprecated */
  length: never;
  /** @deprecated */
  name: never;
  /** @deprecated */
  prototype: never;
  /** @deprecated */
  toString: never;
  /** @deprecated */
  Symbol: never;

  /** a single haptic */
  (): void;
  /** two rapid haptics */
  confirm: () => void;
  /** three rapid haptics */
  error: () => void;
}

const __haptic = _haptic as haptic;

export { __haptic as haptic };
