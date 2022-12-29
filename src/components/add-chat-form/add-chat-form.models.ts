import AddChatForm, { TAddChatForm } from "./add-chat-form";
import ChatController from "../../system/controllers/chat-controller/chat-controller";

const chatController = new ChatController();

function onAddChatSubmit(evt: SubmitEvent): void {
  evt.preventDefault();
  const target = evt.target as HTMLFormElement;
  const formData = new FormData(target);
  const title = formData.get(`title`) as string;
  const data = {
    data: {
      title: title,
    },
  };
  chatController.createChat(data);
}

const addChatFormProps: TAddChatForm = {
  attrs: {
    class: `user-action-modal__form`,
  },
  events: {
    submit: [onAddChatSubmit],
  },
};

export const addChatForm = new AddChatForm(addChatFormProps);
