type Primitive = string | number | boolean;

const isPrimitive = (val: unknown): boolean => {
  switch (typeof val) {
    case `string`:
      return true;
    case `number`:
      return true;
    case `boolean`:
      return true;
    default:
      return false;
  }
};

export const get = (
  // eslint-disable-next-line
  obj: any,
  path: string,
  defaultValue: Primitive | undefined = undefined
): Primitive | undefined => {
  const pathArr: string[] = path.split(`.`);
  // eslint-disable-next-line
  let result: any = obj[pathArr[0]];
  if (isPrimitive(result)) {
    return result as unknown as Primitive;
  }
  for (let i = 1; i < pathArr.length; i++) {
    if (result !== undefined && result instanceof Object) {
      result = result[pathArr[i]];
    } else {
      return defaultValue !== undefined ? defaultValue : undefined;
    }
  }
  return result as unknown as Primitive | undefined;
};
