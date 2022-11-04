export const first = (list: unknown): unknown | undefined => {
  if (Array.isArray(list)) {
    return list[0];
  }
  return undefined;
};
