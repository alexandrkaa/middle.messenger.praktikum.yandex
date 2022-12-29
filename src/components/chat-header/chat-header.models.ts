import ChatHeader, { TChatHeaderProps } from "./chat-header";
import { deleteChatBtn, addRemoveUserModalBtn } from "../button/button.models";

const chatHeaderProps: TChatHeaderProps = {
  title: ``,
  deleteChat: deleteChatBtn,
  addRemoveUserModal: addRemoveUserModalBtn,
  attrs: {
    class: `chat-text-block__header`,
  },
};

export const chatHeader = new ChatHeader(chatHeaderProps);
