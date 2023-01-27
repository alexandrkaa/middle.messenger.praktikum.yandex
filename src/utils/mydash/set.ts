import { Indexed, merge } from "./merge";

function set(
  object: Indexed | unknown,
  path: string,
  value: unknown
): Indexed | unknown {
  if (typeof object !== `object` || object === null) {
    return object;
  }

  if (typeof path !== `string`) {
    throw new Error(`path must be string`);
  }

  const result = path.split(`.`).reduceRight<Indexed<unknown>>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as Indexed<unknown>
  );
  return merge(object as Indexed, result);
}

export { set };
