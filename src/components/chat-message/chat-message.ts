import { tpl } from "./chat-message.tpl";
import { Block, TAll } from "../../system/block/block";

export interface TChatMsgProps extends TAll {
  isSelf?: boolean;
  text?: string;
  status?: string;
  time?: string;
  datetime?: string;
  attrs?: {
    class?: string;
  };
}

export class ChatMessage extends Block<TChatMsgProps> {
  constructor(props: TChatMsgProps, tagName: string = `li`) {
    super(props, tagName);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <li class="
//   chat-text-block__chat-message
//   {{#if isSelf}} chat-text-block__chat-message--self{{/if}}
//   chat-message
//   {{#if isSelf}} chat-message--self{{/if}}
// ">
