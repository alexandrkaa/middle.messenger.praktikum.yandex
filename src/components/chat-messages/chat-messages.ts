import { tpl } from "./chat-messages.tpl";
import { Block, TAll, TChild } from "../../system/block/block";
import { connect } from "../../utils/hoc";
// import { isEqual } from "../../utils/mydash";
import { TMessage } from "../../system/ws/ws";
import { isEqual } from "../../utils/mydash";
import { ChatMessage } from "../chat-message/chat-message";

export interface TChatMsgsProps extends TAll {
  messages: TChild;
  activeChatId?: number;
  storedMessages?: TMessage[];
  userId?: number;
  attrs: {
    class: string;
  };
}

class ChatMessages extends Block<TChatMsgsProps> {
  constructor(props: TChatMsgsProps, tagName = `ul`) {
    super(props, tagName);
  }

  componentDidMount(): void {
    this.element.scrollTop = this.element.scrollHeight;
  }

  componentDidUpdate(
    oldProps: TChatMsgsProps,
    newProps: TChatMsgsProps,
  ): boolean {
    if (!isEqual(oldProps, newProps)) {
      this.children.messages = newProps.storedMessages?.map((msg: TMessage) => {
        const dt = new Date(msg.time as string);
        const isSelf = newProps.userId === msg.user_id;
        return new ChatMessage({
          isSelf,
          text: msg.content,
          time: `${dt.getHours()}:${dt.getMinutes()}`,
          datetime: msg.time,
          attrs: {
            id: `scroller`,
            class: `chat-text-block__chat-message ${
              isSelf ? `chat-text-block__chat-message--self` : ``
            } chat-message ${isSelf ? `chat-message--self` : ``}`,
          },
        });
      }) as TChild;
      this.element.scrollTop = this.element.scrollHeight;
      return true;
    }
    return false;
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

export default connect(ChatMessages, (state) => ({
  activeChatId: state.activeChatId,
  storedMessages: state.messages?.[state.activeChatId] || [],
  userId: state.user?.id,
}));

// {"type":"message","content":"jjj","time":"2023-01-04T18:55:10+00:00","user_id":1771,"id":63}
