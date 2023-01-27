import { tpl } from "./chat-tab.tpl";
import { Block, TAll } from "../../system/block/block";

interface TChatTabProps extends TAll {
  isSelf?: boolean;
  avatar?: string;
  title?: string;
  time?: string;
  cnt?: number | undefined;
  attrs: {
    class: string;
  };
}

export default class ChatTab extends Block<TChatTabProps> {
  constructor(props: TChatTabProps, tagName = `li`) {
    super(props, tagName);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <li class="chats-list__item chat-tab chat-tab--{{selected}}">
