import { tpl } from "./form.tpl";
import { Block, TAll, TChild } from "../../system/block/block";
import { connect } from "../../utils/hoc";

export interface TFormProps extends TAll {
  enterFields?: TChild;
  submitButton?: TChild;
  link?: TChild;
  formTitle?: string;
  attrs?: {
    class: string;
  };
}

class Form extends Block<TFormProps> {
  private _hasError: boolean;

  public data: Record<string, unknown>;

  constructor(props: TFormProps, tagName = `form`) {
    super(props, tagName);
    this.data = {};
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

export default connect(Form, (state) => ({ activeChatId: state.activeChatId }));

// <form class="enter__form enter-form">
