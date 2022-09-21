export const last = (list) => {
  let len;
  if (Array.isArray(list)) {
    len = list.length;
    if (len > 0) {
      return list[len - 1];
    }
  }
  return undefined;
};
