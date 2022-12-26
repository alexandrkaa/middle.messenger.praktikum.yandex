// import { Block, TAll, TChild } from "../../system/block/block";
import { TPageChatProps } from "./chat";
// import { render } from "../../utils/render";
// import PageChat from "./chat";
// import Link from "../../components/link/link";
// import { ChatTab } from "../../components/chat-tab/chat-tab";
import { ChatMessage } from "../../components/chat-message/chat-message";
import { ChatForm } from "../../components/chat-form/chat-form";
import { validateNotEmpty } from "../../utils/validate";
import { sideBar } from "../../components/sidebar/sidebar.models";

const chatMsg1 = new ChatMessage({
  isSelf: true,
  text: `test text`,
  status: `sended`,
  time: `10:20`,
  datetime: `01.09.2022 10:20`,
  attrs: {
    class: `chat-text-block__chat-message chat-text-block__chat-message--self chat-message chat-message--self`,
  },
});

const chatMsg2 = new ChatMessage({
  isSelf: true,
  text: `2 test text 2`,
  status: `delivered`,
  time: `10:20`,
  datetime: `01.09.2022 10:20`,
  attrs: {
    class: `chat-text-block__chat-message chat-text-block__chat-message--self chat-message chat-message--self`,
  },
});

const chatMsg3 = new ChatMessage({
  isSelf: true,
  text: `3 test text 3`,
  status: `readed`,
  time: `10:20`,
  datetime: `01.09.2022 10:20`,
  attrs: {
    class: `chat-text-block__chat-message chat-text-block__chat-message--self chat-message chat-message--self`,
  },
});

const chatMsgs = [chatMsg1, chatMsg2, chatMsg3];

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
  // profileLink: profileLink,
  // chatTabs: chatTabs,
  sideBar: sideBar,
  avatarSrc: `https://via.placeholder.com/32`,
  name: `Aleksandr`,
  chatMsgs: chatMsgs,
  chatForm: chatForm,
  attrs: {
    class: `chat-page`,
  },
};
// const pageChat = new PageChat(propsPageChat);
// render(`.app`, pageChat);

// setTimeout(() => {
//   chatMsg3.setProps({
//     isSelf: true,
//     text: `4 test text 4`,
//     status: `readed`,
//     time: `11:20`,
//     datetime: `01.09.2022 10:20`,
//     attrs: {
//       class: `chat-text-block__chat-message chat-message`,
//     },
//   });
// }, 2000);
