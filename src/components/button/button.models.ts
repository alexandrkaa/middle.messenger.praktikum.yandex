import Button from "./button";
import AuthController from "../../system/controllers/auth-controller/auth-controller";
import ChatController from "../../system/controllers/chat-controller/chat-controller";
import { store } from "../../system/store/store";

const authController = new AuthController();
const chatController = new ChatController();

const onLogout = (evt: Event) => {
  evt.preventDefault();
  authController.logout();
};

export const signInSubmit = new Button({
  title: `Sign In`,
  attrs: {
    class: `button enter-form__submit`,
    type: `submit`,
  },
});

export const signUpSubmit = new Button({
  title: `Sign Up`,
  attrs: {
    class: `button enter-form__submit`,
    type: `submit`,
  },
});

export const logOut = new Button({
  title: `Logout`,
  attrs: {
    type: `button`,
    class: `link link--red`,
  },
  events: {
    click: [onLogout],
  },
});

export const profileEditSubmit = new Button({
  title: `Save`,
  attrs: {
    type: `submit`,
    class: `button`,
  },
});

export const profilePasswordSubmit = new Button({
  title: `Save`,
  attrs: {
    type: `submit`,
    class: `button`,
  },
});

export const addChatButton = new Button({
  title: `Add chat`,
  attrs: {
    type: `button`,
    class: `link add-chat`,
    [`data-type`]: `add-chat`,
  },
});

export const addChatFormButton = new Button({
  title: `Submit`,
  attrs: {
    type: `submit`,
    class: `button`,
  },
});

export const addUserFormButton = new Button({
  title: `Add user`,
  attrs: {
    type: `submit`,
    class: `button`,
  },
});

export const removeUserFormButton = new Button({
  title: `Remove user`,
  attrs: {
    type: `submit`,
    class: `button`,
  },
});

function deleteChat(evt: Event): void {
  evt.preventDefault();
  const data = {
    data: {
      chatId: store.getState().activeChatId,
    },
  };
  chatController.deleteChat(data);
  // console.log(data);
}

export const deleteChatBtn = new Button({
  attrs: {
    type: `button`,
    class: `chat-text-block__delete-chat`,
    [`aria-label`]: `delete chat`,
  },
  events: {
    click: [deleteChat],
  },
});

export const addRemoveUserModalBtn = new Button({
  attrs: {
    type: `button`,
    class: `chat-text-block__control-users`,
    [`aria-label`]: `add/remove user`,
    [`data-type`]: `add-remove-user`,
  },
});

export const addUserButton = new Button({
  title: `Add user`,
  attrs: {
    type: `button`,
    class: `link link--control-user add-user`,
    [`data-type`]: `add-user`,
  },
});

export const removeUserButton = new Button({
  title: `Remove user`,
  attrs: {
    type: `button`,
    class: `link link--control-user link--remove-user remove-user`,
    [`data-type`]: `remove-user`,
  },
});
