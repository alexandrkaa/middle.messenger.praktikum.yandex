export const last = (list: unknown): unknown | undefined => {
  let len: number;
  if (Array.isArray(list)) {
    len = list.length;
    if (len > 0) {
      return list[len - 1];
    }
  }
  return undefined;
};
