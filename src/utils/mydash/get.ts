type Primitive = string | number | boolean;
type StOrNum = string | number;
export type SafeNestedMap = {
  [key in StOrNum]: SafeNestedMap;
};

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
  obj: SafeNestedMap,
  path: string,
  defaultValue: Primitive | undefined = undefined
): Primitive | undefined => {
  const pathArr: string[] = path.split(`.`);
  let result: SafeNestedMap | Primitive | undefined = obj[pathArr[0]];
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
