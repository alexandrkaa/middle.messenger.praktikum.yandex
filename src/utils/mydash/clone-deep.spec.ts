import { expect } from "chai";
import { cloneDeep } from "./clone-deep";

const mockObj = { a: { b: 1, c: { d: 2 } } };

describe("MyDash utils / cloneDeep", () => {
  it("cloneDeep should works correctly", () => {
    expect(JSON.stringify(cloneDeep(mockObj))).to.equal(
      JSON.stringify(mockObj)
    );
  });
});
