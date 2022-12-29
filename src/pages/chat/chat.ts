import { tpl } from "./chat.tpl";
import { Block, TAll, TChild } from "../../system/block/block";
import ChatController from "../../system/controllers/chat-controller/chat-controller";
import { router } from "../../index";
import { routesPaths } from "../../consts/routes";
import { isLoggedIn } from "../../utils/is-logged-in";
import { connect } from "../../utils/hoc";

export interface TPageChatProps extends TAll {
  sideBar?: TChild;
  chatMsgs?: TChild;
  chatForm?: TChild;
  chatHeader?: TChild;
  activeChatId?: number;
  attrs?: Record<string, string>;
}

const chatController = new ChatController();

const getChats = async () => {
  return await chatController.getChats({});
};

class PageChat extends Block<TPageChatProps> {
  constructor(props: TPageChatProps, tagName: string = `main`) {
    super(props, tagName);
  }

  async componentDidMount(): Promise<void> {
    const user = await isLoggedIn();
    if (!user) {
      router.go(routesPaths.SIGN_IN);
    }
    await getChats();
    // const chats = await getChats();
    // console.log(chats);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

export default connect(PageChat, (state) => ({
  activeChatId: state.activeChatId,
}));

// <main class="chat-page">
