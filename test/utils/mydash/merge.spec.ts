import { expect } from "chai";
import { merge } from "../../../src/utils/mydash";

const mock = {
  obj1: { a: { b: 1, c: { d: 2 } } },
  obj2: { a: { b: 5, e: 3 } },
  result: { a: { b: 1, c: { d: 2 }, e: 3 } },
};

describe(`MyDash utils / Merge`, () => {
  it(`Merge should works correctly`, () => {
    expect(
      JSON.stringify(merge(mock.obj1, mock.obj2)),
      JSON.stringify(mock.result),
    );
  });
});
