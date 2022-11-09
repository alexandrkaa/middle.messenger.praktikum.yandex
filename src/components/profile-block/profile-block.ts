import { tpl } from "./profile-block.tpl";
import { Block, TAll } from "../../system/block/block";

export interface TProfileBlock extends TAll {
  title: string;
  value: string;
  attrs: {
    class: string;
  };
}

export class ProfileBlock extends Block<TProfileBlock> {
  constructor(props: TProfileBlock) {
    super(`div`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <div class="profile-block">
