import ChatMessages, { TChatMsgsProps } from "./chat-messages";

const chatMessagesProps: TChatMsgsProps = {
  messages: [],
  attrs: {
    class: `chat-text-block__chat-messages chat-messages`,
  },
};

export const chatMessages = new ChatMessages(chatMessagesProps);
