import { tpl } from "./chat-form.tpl";
import { Block, TAll } from "../../system/block/block";
import { connect } from "../../utils/hoc";

export interface TChatFormProps extends TAll {
  placeHolder: string;
  // eslint-disable-next-line
  events: { [key: string]: ((evt: Event) => void)[] };
  activeChatId?: number;
  attrs: {
    class: string;
    action?: string;
    method?: string;
  };
}

class ChatForm extends Block<TChatFormProps> {
  constructor(props: TChatFormProps, tagName = `form`) {
    super(props, tagName);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

export default connect(ChatForm, (state) => ({
  activeChatId: state.activeChatId,
}));

// <form class="chat-text-block__form message-form">
