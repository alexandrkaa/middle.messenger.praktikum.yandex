import Form from "./form";
import {
  signInSubmit,
  signUpSubmit,
  addChatFormButton,
  addUserFormButton,
  removeUserFormButton,
} from "../button/button.models";
import { signUpLink, signInLink } from "../link/link.models";
import {
  signInLoginField,
  signInPasswordField,
  signUpLoginField,
  signUpPasswordField,
  emailField,
  firstNameField,
  lastNameField,
  phoneField,
  password2Field,
  addChatFormInputField,
  addUserFormInputField,
  removeUserFormInputField,
} from "../input-field-block/input-field-block.models";

import ChatController from "../../system/controllers/chat-controller/chat-controller";
import { LOGIN_LENGTH } from "../../consts/consts";

const chatController = new ChatController();

function onFormSubmit(
  target: HTMLFormElement,
  dataField: string,
  action: Function
): void {
  const formData = new FormData(target);
  const title = formData.get(`form-field`) as string;
  const data = {
    data: {
      [dataField]: title,
    },
  };
  action(data);
}

const focusEvent = new FocusEvent(`focusout`, {
  view: window,
  bubbles: true,
  cancelable: true,
});

function formValidate(evt: SubmitEvent): void {
  evt.preventDefault();
  let isValid: boolean = true;
  this.hasError = false;
  const fields = this.children.enterFields;
  for (const field of fields) {
    field.element.querySelector(`input`).dispatchEvent(focusEvent);
    if (field.hasError && isValid) {
      isValid = false;
    }
  }
  if (!isValid) {
    this.hasError = true;
  }
}

export const signInEnterFormProps = {
  submitButton: signInSubmit,
  enterFields: [signInLoginField, signInPasswordField],
  link: signUpLink,
  attrs: {
    class: `enter__form enter-form`,
  },
  events: {
    submit: [formValidate],
  },
};

export const signUpEnterFormProps = {
  submitButton: signUpSubmit,
  enterFields: [
    signUpLoginField,
    emailField,
    firstNameField,
    lastNameField,
    phoneField,
    signUpPasswordField,
    password2Field,
  ],
  link: signInLink,
  attrs: {
    class: `enter__form enter-form`,
  },
  events: {
    submit: [formValidate],
  },
};

const onAddChatSubmit = function (evt: SubmitEvent): void {
  evt.preventDefault();
  const target = evt.target as HTMLFormElement;
  onFormSubmit(target, `title`, chatController.createChat);
};

export const addChatFormProps = {
  submitButton: addChatFormButton,
  enterFields: addChatFormInputField,
  formTitle: `Add chat`,
  attrs: {
    class: `enter__form enter-form`,
  },
  events: {
    submit: [onAddChatSubmit],
  },
};

const onAddUserSubmit = function (evt: SubmitEvent): void {
  evt.preventDefault();
  if (this.data && this.data.users) {
    const { users } = this.data;
    if (Array.isArray(users)) {
      const data = {
        data: {
          users: users.map((it) => it.id),
          chatId: this.props.activeChatId,
        },
      };
      chatController.addUserToChat(data);
    }
  }
};

async function searchUserOnKeyUp(evt: Event): Promise<void> {
  const target = evt.target as HTMLInputElement;
  if (target.value.length >= LOGIN_LENGTH) {
    const data = {
      data: {
        login: target.value,
      },
    };
    const users = await chatController.searchUserByLogin(data);
    this.data = {
      users: users,
    };
  }
}

export const addUserToChatFormProps = {
  submitButton: addUserFormButton,
  enterFields: addUserFormInputField,
  formTitle: `Add user`,
  attrs: {
    class: `enter__form enter-form`,
  },
  events: {
    submit: [onAddUserSubmit],
    keyup: [searchUserOnKeyUp],
  },
};

const onRemoveUserSubmit = function (evt: SubmitEvent): void {
  evt.preventDefault();
  if (this.data && this.data.users) {
    const { users } = this.data;
    if (Array.isArray(users)) {
      const data = {
        data: {
          users: users.map((it) => it.id),
          chatId: this.props.activeChatId,
        },
      };
      chatController.removeUserFromChat(data);
    }
  }
};

export const removeUserFromChatFormProps = {
  submitButton: removeUserFormButton,
  enterFields: removeUserFormInputField,
  formTitle: `Remove user`,
  attrs: {
    class: `enter__form enter-form`,
  },
  events: {
    submit: [onRemoveUserSubmit],
    keyup: [searchUserOnKeyUp],
  },
};

export const signInEnterForm = new Form(signInEnterFormProps);
export const signUpEnterForm = new Form(signUpEnterFormProps);

export const addChatForm = new Form(addChatFormProps);
export const addUserToChatForm = new Form(addUserToChatFormProps);
export const removeUserFromChatForm = new Form(removeUserFromChatFormProps);
