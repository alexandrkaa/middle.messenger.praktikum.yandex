import { tpl } from "./profile-block.tpl";
import { Block, TAll } from "../../system/block/block";

export interface TProfileBlock extends TAll {
  title: string;
  value: string;
  formName: string;
  type: string;
  attrs: {
    class: string;
    accept?: string;
  };
}

export default class ProfileBlock extends Block<TProfileBlock> {
  constructor(props: TProfileBlock, tagName = `div`) {
    super(props, tagName);
  }

  protected componentDidMount(): void {
    // console.log(`ProfileBlock: CDM`);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <div class="profile-block">
