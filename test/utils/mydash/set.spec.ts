import { expect } from "chai";
import { set } from "../../../src/utils/mydash";

const mock = {
  start1: `a.b.c`,
  result1: JSON.stringify({ a: { b: { c: 1 } } }),
};

describe("MyDash utils / Set", () => {
  it("Set should create correct object", () => {
    expect(JSON.stringify(set({}, mock.start1, 1))).to.equal(mock.result1);
  });
});
