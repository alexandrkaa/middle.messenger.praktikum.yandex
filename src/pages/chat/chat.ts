import { tpl } from "./chat.tpl";
import { Block, TAll, TChild } from "../../system/block/block";
import ChatController from "../../system/controllers/chat-controller/chat-controller";
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

const chatController = new ChatController();

export default class PageChat extends Block<TPageChatProps> {
  constructor(props: TPageChatProps, tagName: string = `main`) {
    super(props, tagName);
  }

  componentDidMount(): void {
    chatController.getChats({});
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <main class="chat-page">
