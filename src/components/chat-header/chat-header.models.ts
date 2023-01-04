import ChatHeader, { TChatHeaderProps } from "./chat-header";
import { deleteChatBtn, addRemoveUserModalBtn } from "../button/button.models";
import {
  controlUsersModal,
  addUserModal,
  removeUserModal,
} from "../modal/modal.model";

function onChatHeaderClick(evt: Event): void {
  const target = evt.target as HTMLElement;
  if (target.dataset.type && target.dataset.type === `add-remove-user`) {
    evt.preventDefault();
    this.children.controlUsersModal.show();
  }

  if (target.dataset.type && target.dataset.type === `add-user`) {
    evt.preventDefault();
    this.children.controlUsersModal.hide();
    this.children.addUserModal.show();
  }

  if (target.dataset.type && target.dataset.type === `remove-user`) {
    evt.preventDefault();
    this.children.controlUsersModal.hide();
    this.children.removeUserModal.show();
  }
}

const chatHeaderProps: TChatHeaderProps = {
  title: ``,
  deleteChat: deleteChatBtn,
  addRemoveUserModalBtn: addRemoveUserModalBtn,
  controlUsersModal: controlUsersModal,
  addUserModal: addUserModal,
  removeUserModal: removeUserModal,
  attrs: {
    class: `chat-text-block__header`,
  },
  events: {
    click: [onChatHeaderClick],
  },
};

export const chatHeader = new ChatHeader(chatHeaderProps);
