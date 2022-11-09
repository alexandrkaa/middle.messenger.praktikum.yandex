import { tpl } from "./enter.tpl";
import { Block, TAll, TChild } from "../../system/block/block";

export interface TPageEnterProps extends TAll {
  title: string;
  enterForm: TChild;
  attrs: {
    class: string;
  };
}

export class PageEnter extends Block<TPageEnterProps> {
  constructor(props: TPageEnterProps) {
    super(`main`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <main class="enter-page">
