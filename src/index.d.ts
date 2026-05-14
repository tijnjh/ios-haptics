export declare const supportsHaptics: boolean;
/** INTERNAL */
export declare function triggerAndroidHaptic(): void;
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
    /**  a single haptic */
    (): void;
    /** two rapid haptics */
    confirm: () => void;
    /** three rapid haptics */
    error: () => void;
}
/**
 * @deprecated
 * doesn't work in safari 26.5 and above, use the framework-specific HapticTrigger component instead
 */
declare const __haptic: haptic;
export { __haptic as haptic };
