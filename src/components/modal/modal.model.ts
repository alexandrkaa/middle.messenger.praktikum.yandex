import Modal, { TModal } from "./modal";
import { addChatForm } from "../add-chat-form/add-chat-form.models";

function onModalClick(evt: Event): void {
  const target = evt.target as HTMLElement;
  // hide modal on background click
  if (target === this.element) {
    this.hide();
  }
}

const addChatModalProps: TModal = {
  modalContent: addChatForm,
  attrs: {
    class: `modal modal--center`,
  },
  events: {
    click: [onModalClick],
  },
};

export const addChatFormModal = new Modal(addChatModalProps);
