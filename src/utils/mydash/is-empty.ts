// Аргументами могут быть:
//   Object,
//   Array,
//   Map,
//   Set,
//   примитивы.
// Значения 0 и другие Number, null, true, false, "", undefined, [], {} должны возвращать true.

export const isEmpty = (value: unknown): boolean => {
  if (Number.isNaN(value)) {
    throw new Error(`Unsupported value`);
  }
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

    // if (value.toString() === `[object Set]`) {
    if (value instanceof Set) {
      if (value.size === 0) {
        return true;
      }
    }

    // if (value.toString() === `[object Map]`) {
    if (value instanceof Map) {
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
