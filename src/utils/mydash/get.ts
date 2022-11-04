export const get = (
  obj: object,
  path: string,
  defaultValue: unknown = undefined
): unknown => {
  const pathArr = path.split(`.`);
  let result: [] = obj[pathArr[0]];
  for (let i = 1; i < pathArr.length; i++) {
    try {
      result = result[pathArr[i]];
    } catch (err) {
      return defaultValue !== undefined ? defaultValue : undefined;
    }
  }
  return result;
};
