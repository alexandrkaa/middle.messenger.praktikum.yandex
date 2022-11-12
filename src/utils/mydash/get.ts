type Primitive = string | number | boolean;
interface SafeNestedMap
  extends Record<string | number | symbol, Primitive | SafeNestedMap> {}

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
  if (isPrimitive(isPrimitive(result))) {
    return result as Primitive;
  } else {
    for (let i = 1; i < pathArr.length; i++) {
      if (result !== undefined && result instanceof Object) {
        result = result[pathArr[i]];
      } else {
        return defaultValue !== undefined ? defaultValue : undefined;
      }
    }
    return result as Primitive | undefined;
  }
};
