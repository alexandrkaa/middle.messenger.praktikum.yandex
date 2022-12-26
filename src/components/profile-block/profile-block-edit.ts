import { tpl } from "./profile-block-edit.tpl";
import { Block, TAll } from "../../system/block/block";

export interface TProfileBlockEdit extends TAll {
  title: string;
  value: string;
  formName: string;
  type: string;
  attrs: {
    class: string;
    accept?: string;
  };
}

export default class ProfileBlockEdit extends Block<TProfileBlockEdit> {
  constructor(
    props: TProfileBlockEdit,
    tagName: string = `div`,
    _tpl?: string
  ) {
    super(props, tagName);
  }

  protected componentDidMount(): void {
    // console.log(`ProfileBlockEdit: CDM`);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <div class="profile-block">
