import { tpl } from "./chat.tpl";
import { Block, TAll, TChild } from "../../system/block/block";

export interface TPageChatProps extends TAll {
  // profileLink: TChild;
  // chatTabs: TChild;
  sideBar: TChild;
  avatarSrc: string;
  name: string;
  chatMsgs: TChild;
  chatForm: TChild;
  attrs: Record<string, string>;
}

export default class PageChat extends Block<TPageChatProps> {
  constructor(props: TPageChatProps) {
    super(`main`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <main class="chat-page">
