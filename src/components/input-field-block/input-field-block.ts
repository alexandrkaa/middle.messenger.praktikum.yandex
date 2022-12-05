import { tpl } from "./input-field-block.tpl";
import { Block, TAll } from "../../system/block/block";

export interface TIFBProps extends TAll {
  type?: string;
  placeholderText?: string;
  name?: string;
  errorText?: string;
  attrs?: {
    class: string;
  };
}

export default class InputFieldBlock extends Block<TIFBProps> {
  private _fieldValue: string;
  private _hasError: boolean;
  constructor(props: TIFBProps) {
    super(`div`, props);
    this._fieldValue = ``;
    this._hasError = false;
  }

  get fValue() {
    return this._fieldValue;
  }

  set fValue(val) {
    this._fieldValue = val;
  }

  get hasError() {
    return this._hasError;
  }

  set hasError(val) {
    this._hasError = Boolean(val);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    if (this._fieldValue) {
      result.querySelector(`input`)!.value = this._fieldValue;
    }
    return result;
  }
}

// <div class="enter-form__field-block field-block {{#if hasError}}field-block--has-error{{/if}}">
