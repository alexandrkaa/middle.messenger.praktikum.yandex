import { profileLink } from "../link/link.models";
import { addChatButton } from "../button/button.models";
import SideBar from "./sidebar";
import { addChatFormModal } from "../modal/modal.model";

function onSideBarClick(evt: Event): void {
  const target = evt.target as HTMLElement;
  if (target.dataset.type && target.dataset.type === `add-chat`) {
    evt.preventDefault();
    this.children.addChatFormModal.show();
  }
}

const sProps = {
  profileLink: profileLink,
  addChatBtn: addChatButton,
  chatTabs: [],
  addChatFormModal: addChatFormModal,
  attrs: {
    class: `chat__chats-list-block`,
  },
  events: {
    click: [onSideBarClick],
  },
};

export const sideBar = new SideBar(sProps);
