import InputFieldBlock, { TIFBProps } from "./input-field-block";
import { validateLogin, validatePassword } from "../../utils/validate";

const errorHelper = (
  validator: (str: string) => boolean,
  evt: FocusEvent,
  block: InputFieldBlock
) => {
  const value = (evt.target as HTMLInputElement).value;
  if (!validator(value)) {
    block.hasError = true;
    block.setProps({
      attrs: {
        class: `enter-form__field-block field-block field-block--has-error`,
      },
    });
  } else {
    block.hasError = false;
    block.setProps({
      attrs: {
        class: `enter-form__field-block field-block`,
      },
    });
  }
};

function loginFocus(evt: FocusEvent): void {
  errorHelper(validateLogin, evt, this);
}

function passwordFocus(evt: FocusEvent): void {
  errorHelper(validatePassword, evt, this);
}

function onKeyUp(evt: Event): void {
  (this as InputFieldBlock).fValue = (evt.target as HTMLInputElement).value;
}

const loginProps: TIFBProps = {
  type: `text`,
  placeholderText: `Login`,
  name: `login`,
  errorText: `Incorrect login`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    focusout: [loginFocus],
    keyup: [onKeyUp],
  },
};

const passwordProps: TIFBProps = {
  type: `password`,
  placeholderText: `Password`,
  name: `password`,
  errorText: `Incorrect password`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    focusout: [passwordFocus],
    keyup: [onKeyUp],
  },
};

export const loginField = new InputFieldBlock(loginProps);
export const passwordField = new InputFieldBlock(passwordProps);
