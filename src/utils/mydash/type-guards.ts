export const isNumber = (x: unknown): x is number => {
  if (typeof x === `number`) {
    return true;
  }
  return false;
};

export const isString = (x: unknown): x is string => {
  if (typeof x === `string`) {
    return true;
  }
  return false;
};
