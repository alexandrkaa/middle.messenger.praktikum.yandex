import { tpl } from "./input-field-block.tpl";
import { Block, TAll } from "../../system/block/block";

export interface TIFBProps extends TAll {
  type: string;
  placeholderText: string;
  name: string;
  errorText: string;
  attrs: {
    class: string;
  };
}

export class InputFieldBlock extends Block<TIFBProps> {
  constructor(props: TIFBProps) {
    super(`div`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    // console.log(this.props);
    return result;
  }
}

// <div class="enter-form__field-block field-block {{#if hasError}}field-block--has-error{{/if}}">
