import Modal, { TModal } from "./modal";
import {
  addChatForm,
  addUserToChatForm,
  removeUserFromChatForm,
} from "../form/form.models";
import { addUserButton, removeUserButton } from "../button/button.models";

function onModalClick(evt: Event): void {
  const target = evt.target as HTMLElement;
  // hide modal on background click
  if (target === this.element) {
    this.hide();
  }
}

function onSubmitHide(evt: SubmitEvent): void {
  evt.preventDefault();
  if (evt.currentTarget === this.element) {
    this.hide();
  }
}

const addChatModalProps: TModal = {
  modalContent: addChatForm,
  attrs: {
    class: `modal modal--center user-action-modal`,
  },
  events: {
    click: [onModalClick],
  },
};

const controlUsersModalProps: TModal = {
  modalContent: [addUserButton, removeUserButton],
  attrs: {
    class: `modal modal--control-users`,
  },
  events: {
    click: [onModalClick],
  },
};

const addUserModalProps: TModal = {
  modalContent: addUserToChatForm,
  attrs: {
    class: `modal modal--center user-action-modal`,
  },
  events: {
    click: [onModalClick],
    submit: [onSubmitHide],
  },
};

const removeUserModalProps: TModal = {
  modalContent: removeUserFromChatForm,
  attrs: {
    class: `modal modal--center user-action-modal`,
  },
  events: {
    click: [onModalClick],
    submit: [onSubmitHide],
  },
};

export const addChatFormModal = new Modal(addChatModalProps);
export const controlUsersModal = new Modal(controlUsersModalProps);
export const addUserModal = new Modal(addUserModalProps);
export const removeUserModal = new Modal(removeUserModalProps);
