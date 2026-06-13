export const sg = {
  Object: {
    entries: <T>(obj: T extends object ? T : never): [keyof T, T[keyof T]][] => {
      return globalThis.Object.entries(obj) as [keyof T, T[keyof T]][]
    },
    keys: <T>(obj: T extends object ? T : never): (keyof T)[] => {
      return globalThis.Object.keys(obj) as (keyof T)[]
    },
    values: <T>(obj: T extends object ? T : never): T[keyof T][] => {
      return globalThis.Object.values(obj) as T[keyof T][]
    },
  },
}
