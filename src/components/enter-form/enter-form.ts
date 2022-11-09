import { tpl } from "./enter-form.tpl";
import { Block, TAll, TChild } from "../../system/block/block";

export interface TEnterFormProps extends TAll {
  enterFields: TChild;
  submitTitle: string;
  linkTitle: string;
  link: string;
  attrs: {
    class: string;
  };
}

export class EnterForm extends Block<TEnterFormProps> {
  constructor(props: TEnterFormProps) {
    super(`form`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <form class="enter__form enter-form">
