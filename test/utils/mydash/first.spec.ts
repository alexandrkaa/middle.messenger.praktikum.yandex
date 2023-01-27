import { expect } from "chai";
import { first } from "../../../src/utils/mydash";

const arr = [1, 2, 3];

describe(`MyDash utils / First`, () => {
  it(`First should return first element of array`, () => {
    expect(first(arr)).to.equal(1);
  });
});
