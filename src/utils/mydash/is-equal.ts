import { Indexed } from "./merge";
// import { Block } from "../../system/block/block";

export function isPlainObject(value: unknown): value is Indexed {
  return (
    typeof value === `object`
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === `[object Object]`
  );
}

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | Indexed {
  return isPlainObject(value) || isArray(value);
}

function isEqual(lhs: Indexed, rhs: Indexed) {
  if (lhs === null && rhs !== null) {
    return false;
  }

  if (rhs === null && lhs !== null) {
    return false;
  }

  if (lhs === undefined && rhs !== undefined) {
    return false;
  }

  if (rhs === undefined && lhs !== undefined) {
    return false;
  }

  if (!isArrayOrObject(lhs)) {
    return lhs === rhs;
  }

  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    // if (value instanceof Block) {
    //   console.log(value.id, rhs[key].id);
    //   if (value.id !== rhs[key].id) {
    //     return false;
    //   }
    // }
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        // eslint-disable-next-line no-continue
        continue;
      }
      // console.log(value, rightValue);
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
}

export { isEqual };
