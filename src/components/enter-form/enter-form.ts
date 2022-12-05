import { tpl } from "./enter-form.tpl";
import { Block, TAll, TChild } from "../../system/block/block";

export interface TEnterFormProps extends TAll {
  enterFields: TChild;
  submitButton: TChild;
  link: TChild;
  attrs: {
    class: string;
  };
}

export default class EnterForm extends Block<TEnterFormProps> {
  private _hasError: boolean;
  constructor(props: TEnterFormProps) {
    super(`form`, props);
  }

  get hasError() {
    return this._hasError;
  }

  set hasError(val) {
    this._hasError = Boolean(val);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <form class="enter__form enter-form">
