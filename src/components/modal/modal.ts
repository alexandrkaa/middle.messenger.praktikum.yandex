import { tpl } from "./modal.tpl";
import { Block, TAll, TChild } from "../../system/block/block";

export interface TModal extends TAll {
  modalContent?: TChild;
  attrs?: Record<string, string>;
}

export default class Modal extends Block<TModal> {
  constructor(props: TModal, tagName = `section`) {
    super(props, tagName);
    this.hide();
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <section class="chat__chats-list-block">

// <section class="modal modal--center visually-hidden">
