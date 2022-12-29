import { tpl } from "./add-chat-form.tpl";
import { Block, TAll } from "../../system/block/block"; //TChild

export interface TAddChatForm extends TAll {
  attrs?: Record<string, string>;
}

export default class AddChatForm extends Block<TAddChatForm> {
  constructor(props: TAddChatForm, tagName: string = `form`) {
    super(props, tagName);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <form class="user-action-modal__form">

// <section class="modal modal--center visually-hidden">
