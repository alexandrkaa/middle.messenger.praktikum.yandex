import { assert } from "chai";
import { cloneDeep } from "../../../src/utils/mydash";

import { Block } from "../../../src/system/block/block";
// // eslint-disable-next-line

class TestComponent extends Block<any> {
  render(): DocumentFragment {
    return this.compile(`<div>{{props}}</div>`, this.props);
  }
}

const block = new TestComponent({ props: `second props` });

describe(`Block renders and updates on change props correctly`, () => {
  before(() => {
    block.setProps({ props: `init` });
  });

  it(`render will returns correct textContent`, () => {
    assert.equal(block.getContent().textContent, `init`);
  });

  it(`setProps will change props`, () => {
    const oldProps = cloneDeep(block.getProps());
    block.setProps({ props: `setProps2` });
    assert.notEqual(block.getProps().props, oldProps.props);
  });

  it(`setProps will call render on props update`, () => {
    block.setProps({ props: `isNotEqual` });
    assert.equal(block.getContent().textContent, `isNotEqual`);
  });
});
