import { tpl } from "./chat-header.tpl";
import { Block, TAll, TChild } from "../../system/block/block";
import { connect } from "../../utils/hoc";
import { isEqual } from "../../utils/mydash";

export interface TChatHeaderProps extends TAll {
  title?: string;
  avatar?: string;
  deleteChat?: TChild;
  addRemoveUserModalBtn?: TChild;
  addRemoveUserModal?: TChild;
  addUserModal?: TChild;
  removeUserModal?: TChild;
  attrs?: {
    class: string;
    [key: string]: string;
  };
}

class ChatHeader extends Block<TChatHeaderProps> {
  constructor(props: TChatHeaderProps, tagName = `section`) {
    super(props, tagName);
  }

  componentDidUpdate(
    oldProps: TChatHeaderProps,
    newProps: TChatHeaderProps,
  ): boolean {
    if (!isEqual(oldProps, newProps)) {
      if (newProps.chats && Array.isArray(newProps.chats)) {
        // console.log(newProps);
        const chat = newProps.chats.find(
          (it) => it.id === newProps.activeChatId,
        );
        if (chat) {
          const { title, avatar } = chat;
          this.setProps({ title, avatar });
        }
      }
      return true;
    }
    return false;
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

export default connect(ChatHeader, (state) => ({
  activeChatId: state.activeChatId,
  chats: state.chats,
}));

// <section class="chat-text-block__header">
