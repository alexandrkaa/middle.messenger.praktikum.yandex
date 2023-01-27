import { expect } from "chai";
import { trim } from "../../../src/utils/mydash";

const mock = {
  start1: ` qwe `,
  result1: `qwe`,
  start2: `_qwe_`,
  result2: `qwe`,
};

describe(`MyDash utils / Trim`, () => {
  it(`Trim should return trimmed string`, () => {
    expect(trim(mock.start1)).to.equal(mock.result1);
    expect(trim(mock.start2, `_`)).to.equal(mock.result2);
  });
});
