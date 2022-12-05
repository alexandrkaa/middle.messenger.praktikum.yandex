import EnterForm from "./enter-form";
import { signInSubmit } from "../button/models";
import { signUpLink } from "../link/models";
import { loginField, passwordField } from "../input-field-block/models";
// import { validateLogin, validatePassword } from "../../utils/validate";

const focusEvent = new FocusEvent(`focusout`, {
  view: window,
  bubbles: true,
  cancelable: true,
});

function signInValidate(evt: SubmitEvent): void {
  let isValid: boolean = true;
  this.hasError = false;
  for (const field of this.children.enterFields) {
    field.element.dispatchEvent(focusEvent);
    if (field.hasError && isValid) {
      isValid = false;
    }
  }
  if (!isValid) {
    evt.preventDefault();
    this.hasError = true;
  }
}

export const signInEnterForm = new EnterForm({
  submitButton: signInSubmit,
  enterFields: [loginField, passwordField],
  link: signUpLink,
  attrs: {
    class: `enter__form enter-form`,
  },
  events: {
    submit: [signInValidate],
  },
});
