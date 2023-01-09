import { tpl } from "./sidebar.tpl";
import { Block, TAll, TChild } from "../../system/block/block";
import { connect } from "../../utils/hoc";
import { isEqual } from "../../utils/mydash";
import Modal from "../modal/modal";
import ChatTab from "../chat-tab/chat-tab";
import { Indexed } from "../../utils/mydash/merge";
// import { router } from "../../index";
// import { routesPaths } from "../../consts/routes";
import { store } from "../../system/store/store";
import ChatController from "../../system/controllers/chat-controller/chat-controller";

export const chatController = new ChatController();

export interface TPageSideBar extends TAll {
  profileLink?: TChild;
  addChatBtn?: TChild;
  addChatFormModal?: TChild;
  chatTabs?: TChild;
  chats?: Indexed;
  attrs?: Record<string, string>;
}

function onChatTabClick(evt: Event, chatId: number): void {
  evt.preventDefault();
  if (store.getState().activeChatId) {
    chatController.closeChatWS(store.getState().activeChatId);
  }
  store.set(`activeChatId`, chatId);
  chatController.connectChat(chatId);
}

class SideBar extends Block<TPageSideBar> {
  constructor(props: TPageSideBar, tagName: string = `section`) {
    super(props, tagName);
  }

  componentDidMount(): void {
    if (!store.getState().activeChatId) {
      if (Array.isArray(this.props.chats)) {
        store.set(`activeChatId`, this.props.chats[0].id);
        chatController.connectChat(this.props.chats[0].id);
      }
    }
  }

  componentDidUpdate(oldProps: TPageSideBar, newProps: TPageSideBar): boolean {
    if (!isEqual(oldProps, newProps)) {
      const modal = this.children.addChatFormModal as InstanceType<
        typeof Modal
      >;
      modal.hide();
      if (newProps.chats) {
        if (Array.isArray(newProps.chats)) {
          if (!isEqual(newProps.chats, oldProps.chats as Indexed)) {
            if (!store.getState().activeChatId) {
              store.set(`activeChatId`, newProps.chats[0].id);
            }
            if (!Array.isArray(oldProps.chats)) {
              chatController.connectChat(newProps.chats[0].id);
            }
            this.children.chatTabs = newProps.chats.map((chat) => {
              const onClick = (evt: Event) => {
                onChatTabClick(evt, chat.id);
              };
              return new ChatTab({
                isSelf: chat.created_by === this.props.userId,
                avatar:
                  chat.avatar ?? `https://via.placeholder.com/47?text=Logo`,
                title: chat.title ?? `unnamed`,
                time: chat.time ?? null,
                cnt: chat.unread_count ?? null,
                attrs: {
                  class: `chats-list__item chat-tab`,
                },
                events: {
                  click: [onClick],
                },
              });
            });
          }
        }
      }
      //  else {
      //   console.log(oldProps, newProps);
      // }
      return true;
    }
    return false;
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

export default connect(SideBar, (state) => ({
  chats: state.chats,
  userId: state.user?.id,
}));

// <section class="chat__chats-list-block">
