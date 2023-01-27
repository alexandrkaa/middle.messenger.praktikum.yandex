import { expect } from "chai";
import { range } from "../../../src/utils/mydash";

const mock = {
  start1: 4,
  result1: JSON.stringify([0, 1, 2, 3]),
  start2: -4,
  result2: JSON.stringify([0, -1, -2, -3]),
};

const testRange = (val: number) => JSON.stringify(range(val));

describe(`MyDash utils / Range`, () => {
  it(`Range should return correct array`, () => {
    expect(testRange(mock.start1)).to.equal(mock.result1);
    expect(testRange(mock.start2)).to.equal(mock.result2);
  });
});
