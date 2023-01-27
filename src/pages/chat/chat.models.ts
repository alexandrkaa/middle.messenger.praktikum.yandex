import { TPageChatProps } from "./chat";
import { sideBar } from "../../components/sidebar/sidebar.models";
import { chatHeader } from "../../components/chat-header/chat-header.models";
import { chatForm } from "../../components/chat-form/chat-form.models";
import { chatMessages } from "../../components/chat-messages/chat-messages.models";

export const propsPageChat: TPageChatProps = {
  sideBar,
  chatMsgs: chatMessages,
  chatForm,
  chatHeader,
  attrs: {
    class: `chat-page`,
  },
};
