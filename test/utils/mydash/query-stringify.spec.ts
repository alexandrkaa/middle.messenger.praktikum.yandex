import { expect } from "chai";
import { queryStringify } from "../../../src/utils/mydash";

const mock = {
  obj1: { a: 2, b: `qwerty` },
  result: `a=2&b=qwerty`,
};

describe("MyDash utils / queryStringify", () => {
  it("queryStringify should works correctly", () => {
    expect(queryStringify(mock.obj1), mock.result);
  });
});
