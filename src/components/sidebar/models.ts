import { profileLink } from "../link/models";
import { ChatTab } from "../chat-tab/chat-tab";
import SideBar from "./sidebar";

const chatTab1 = new ChatTab({
  isSelf: true,
  imgSrc: `https://via.placeholder.com/47`,
  name: `Test Name`,
  time: `11:28`,
  cnt: 5,
  attrs: {
    class: `chats-list__item chat-tab`,
  },
});

const chatTab2 = new ChatTab({
  isSelf: true,
  imgSrc: `https://via.placeholder.com/47`,
  name: `Test Name 2`,
  time: `11:29`,
  cnt: 5,
  attrs: {
    class: `chats-list__item chat-tab`,
  },
});

// chat-tab--{{selected}}

const sProps = {
  profileLink: profileLink,
  chatTabs: [chatTab1, chatTab2],
  attrs: {
    class: `chat__chats-list-block`,
  },
};

export const sideBar = new SideBar(sProps);
