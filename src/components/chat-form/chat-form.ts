import { tpl } from "./chat-form.tpl";
import { Block, TAll } from "../../system/block/block";

export interface TChatFormProps extends TAll {
  placeHolder: string;
  events: { [key: string]: ((evt: Event) => void)[] };
  attrs: {
    class: string;
    action?: string;
    method?: string;
  };
}

export class ChatForm extends Block<TChatFormProps> {
  constructor(props: TChatFormProps) {
    super(`form`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <form class="chat-text-block__form message-form">
