import { expect } from "chai";
import { Router } from "../../../src/system/router/router";
import { Block } from "../../../src/system/block/block";
import { IBlock } from "../../../src/system/router/route";

export const router = new Router(`#app`);

class TestComponent extends Block<any> {
  render(): DocumentFragment {
    return this.compile(`<div>{{props}}</div>`, this.props);
  }
}

describe(`Router should render components and update window history`, () => {
  before(() => {
    router.use(`/login`, TestComponent as unknown as IBlock, { props: `init` });
  });
  it(`On router go will updates window history`, () => {
    router.go(`/login`);
    expect(window.history.length).to.eq(2);
  });
});
