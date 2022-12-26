import EnterForm from "./enter-form";
import { signInSubmit, signUpSubmit } from "../button/button.models";
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
} from "../input-field-block/input-field-block.models";

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

export const signInEnterForm = new EnterForm(signInEnterFormProps);
export const signUpEnterForm = new EnterForm(signUpEnterFormProps);
