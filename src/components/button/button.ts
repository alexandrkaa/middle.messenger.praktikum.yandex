import { tpl } from "./button.tpl";
import { Block, TAll } from "../../system/block/block";

interface TButtonProps extends TAll {
  title?: string;
  a11y?: string;
  attrs: {
    type: string;
    class: string;
    [key: string]: string;
  };
}

export default class Button extends Block<TButtonProps> {
  constructor(props: TButtonProps, tagName = `button`) {
    super(props, tagName);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}
