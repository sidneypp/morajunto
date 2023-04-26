/* eslint-disable @typescript-eslint/no-explicit-any */

export function removeEmptyValues<T = Record<string, any>>(
  obj: Record<string, any>
): T {
  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
      delete obj[key];
    }
  }
  return obj as T;
}
