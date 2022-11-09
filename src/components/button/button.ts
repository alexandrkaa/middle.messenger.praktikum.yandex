import { tpl } from "./button.tpl";
import { Block, TAll } from "../../system/block/block";

interface TButtonProps extends TAll {
  type: string;
  class: string;
  title: string;
}

export class Error extends Block<TButtonProps> {
  constructor(props: TButtonProps) {
    super(`div`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}
