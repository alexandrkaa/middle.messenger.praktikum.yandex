export const isEmpty = (value) => {
  if (value === null) {
    return true;
  }

  if (value === undefined) {
    return true;
  }

  if (typeof value === `boolean`) {
    return true;
  }

  if (typeof value === `number`) {
    return true;
  }

  if (typeof value === `string`) {
    if (value.length === 0) {
      return true;
    }
  }

  if (typeof value === `object`) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return true;
      }
    }

    if (value.toString() === `[object Set]`) {
      if (value.size === 0) {
        return true;
      }
    }

    if (value.toString() === `[object Map]`) {
      if (value.size === 0) {
        return true;
      }
    }

    if (value.toString() === `[object Object]`) {
      const keys = Object.keys(value);
      if (keys.length === 0) {
        return true;
      }
    }
  }
  return false;
};
