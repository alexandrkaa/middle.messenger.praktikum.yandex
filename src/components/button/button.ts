import { tpl } from "./button.tpl";
import { Block, TAll } from "../../system/block/block";

interface TButtonProps extends TAll {
  title: string;
  attrs: {
    type: string;
    class: string;
  };
}

export default class Button extends Block<TButtonProps> {
  constructor(props: TButtonProps) {
    super(`button`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}
