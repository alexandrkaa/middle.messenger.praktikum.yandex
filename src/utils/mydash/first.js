export const first = (list) => {
  if (Array.isArray(list)) {
    return list[0];
  }
  return undefined;
};
