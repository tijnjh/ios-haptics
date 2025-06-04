//#region src/index.d.ts
/**
 * A single haptic "click"
 */
declare const haptic: {
  (): void;
  confirm(): void;
  error(): void;
};
//#endregion
export { haptic };