import { tpl } from "./chat-tab.tpl";
import { Block, TAll } from "../../system/block/block";

interface TChatTabProps extends TAll {
  isSelf: boolean;
  imgSrc: string;
  name: string;
  time: string;
  cnt: number;
  attrs: {
    class: string;
  };
}

export class ChatTab extends Block<TChatTabProps> {
  constructor(props: TChatTabProps, tagName: string = `li`) {
    super(props, tagName);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <li class="chats-list__item chat-tab chat-tab--{{selected}}">
