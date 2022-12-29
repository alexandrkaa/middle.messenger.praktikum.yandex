import Button from "./button";
import AuthController from "../../system/controllers/auth-controller/auth-controller";

const authController = new AuthController();

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

export const deleteChatBtn = new Button({
  attrs: {
    type: `button`,
    class: `chat-text-block__delete-chat`,
    [`aria-label`]: `delete chat`,
  },
});

export const addRemoveUserModalBtn = new Button({
  attrs: {
    type: `button`,
    class: `chat-text-block__control-users`,
    [`aria-label`]: `add/remove user`,
  },
});
