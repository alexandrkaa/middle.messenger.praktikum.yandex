import { expect } from "chai";
import { get } from "../../../src/utils/mydash";

const mockObj = { a: { b: 1, c: { d: 2 } } };

describe("MyDash utils / Get", () => {
  it("Get should return correct element of object", () => {
    expect(get(mockObj, `a.c.d`)).to.equal(2);
    expect(get(mockObj, `a.b`)).to.equal(1);
  });

  it("Get should return undefined on incorrect path", () => {
    expect(get(mockObj, `a.c.e`)).to.equal(undefined);
  });
});
