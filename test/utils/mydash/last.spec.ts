import { expect } from "chai";
import { last } from "../../../src/utils/mydash";

const arr = [1, 2, 3];

describe("MyDash utils / Last", () => {
  it("Last should return last element of array", () => {
    expect(last(arr)).to.equal(3);
  });

  it("Last should return undefined on non arrays", () => {
    expect(last(1)).to.equal(undefined);
  });

  it("Last should return undefined on empty arrays", () => {
    expect(last([])).to.equal(undefined);
  });
});
