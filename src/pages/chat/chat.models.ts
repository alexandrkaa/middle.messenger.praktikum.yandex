import { TPageChatProps } from "./chat";
import { ChatForm } from "../../components/chat-form/chat-form";
import { validateNotEmpty } from "../../utils/validate";
import { sideBar } from "../../components/sidebar/sidebar.models";
import { chatHeader } from "../../components/chat-header/chat-header.models";

const submitHandler = (evt: SubmitEvent) => {
  evt.preventDefault();
  const formData = new FormData(evt.target as HTMLFormElement);
  const data = Object.fromEntries(formData.entries());
  if (evt && evt.target) {
    if (validateNotEmpty(data.message as string)) {
      const form = evt?.target as HTMLFormElement;
      if (form) {
        const input = form.querySelector(`input`);
        if (input) {
          console.log(input.value);
          input.value = ``;
        }
      }
    } else {
      console.error(`Empty message not allowed!`);
    }
  }
};

const chatForm = new ChatForm({
  placeHolder: `Message`,
  events: { submit: [submitHandler] },
  attrs: {
    class: `chat-text-block__form message-form`,
  },
});

export const propsPageChat: TPageChatProps = {
  sideBar: sideBar,
  chatMsgs: [],
  chatForm: chatForm,
  chatHeader: chatHeader,
  attrs: {
    class: `chat-page`,
  },
};
