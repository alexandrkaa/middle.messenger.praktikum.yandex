import InputFieldBlock, { TIFBProps } from "./input-field-block";
import {
  validateLogin,
  validatePassword,
  validateEmail,
  validateNotEmpty,
  validatePhone,
  inputErrorHelper,
} from "../../utils/validate";

function loginFocusOutValidate(evt: FocusEvent): void {
  inputErrorHelper(validateLogin, evt, this);
}

function passwordFocusOutValidate(evt: FocusEvent): void {
  inputErrorHelper(validatePassword, evt, this);
}

function emailFocusOutValidate(evt: FocusEvent): void {
  inputErrorHelper(validateEmail, evt, this);
}

function nameFocusOutValidate(evt: FocusEvent): void {
  inputErrorHelper(validateNotEmpty, evt, this);
}

function phoneFocusOutValidate(evt: FocusEvent): void {
  inputErrorHelper(validatePhone, evt, this);
}

function onKeyUp(evt: Event): void {
  (this as InputFieldBlock).fValue = (evt.target as HTMLInputElement).value;
}

const signInLoginProps: TIFBProps = {
  type: `text`,
  placeholderText: `Login`,
  name: `login`,
  errorText: `Incorrect login`,
  class: `field-block__text-input`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    focusout: [loginFocusOutValidate],
    keyup: [onKeyUp],
  },
};

const signUpPasswordProps: TIFBProps = {
  type: `password`,
  placeholderText: `Password`,
  name: `password`,
  errorText: `Incorrect password`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    focusout: [passwordFocusOutValidate],
    keyup: [onKeyUp],
  },
};

const signUpLoginProps: TIFBProps = {
  type: `text`,
  placeholderText: `Login`,
  name: `login`,
  errorText: `Incorrect login`,
  class: `field-block__text-input`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    focusout: [loginFocusOutValidate],
    keyup: [onKeyUp],
  },
};

const signInPasswordProps: TIFBProps = {
  type: `password`,
  placeholderText: `Password`,
  name: `password`,
  errorText: `Incorrect password`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    focusout: [passwordFocusOutValidate],
    keyup: [onKeyUp],
  },
};

const emailProps: TIFBProps = {
  type: `email`,
  placeholderText: `E-mail`,
  name: `email`,
  errorText: `Incorrect E-mail`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    focusout: [emailFocusOutValidate],
    keyup: [onKeyUp],
  },
};

const firstNameProps: TIFBProps = {
  type: `text`,
  placeholderText: `First name`,
  name: `firstName`,
  errorText: `Required`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    focusout: [nameFocusOutValidate],
    keyup: [onKeyUp],
  },
};

const secondNameProps: TIFBProps = {
  type: `text`,
  placeholderText: `Second name`,
  name: `secondName`,
  errorText: `Required`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    focusout: [nameFocusOutValidate],
    keyup: [onKeyUp],
  },
};

const phoneProps: TIFBProps = {
  type: `text`,
  placeholderText: `Phone`,
  name: `phone`,
  errorText: `Required`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    focusout: [phoneFocusOutValidate],
    keyup: [onKeyUp],
  },
};

const passwordProps2: TIFBProps = {
  type: `password`,
  placeholderText: `Repeat password`,
  name: `password2`,
  errorText: `Incorrect password`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
  events: {
    keyup: [onKeyUp],
  },
};

export const signInLoginField = new InputFieldBlock(signInLoginProps);
export const signInPasswordField = new InputFieldBlock(signInPasswordProps);
export const signUpLoginField = new InputFieldBlock(signUpLoginProps);
export const signUpPasswordField = new InputFieldBlock(signUpPasswordProps);
export const passwordField = new InputFieldBlock(emailProps);
export const emailField = new InputFieldBlock(emailProps);
export const firstNameField = new InputFieldBlock(firstNameProps);
export const lastNameField = new InputFieldBlock(secondNameProps);
export const phoneField = new InputFieldBlock(phoneProps);
export const password2Field = new InputFieldBlock(passwordProps2);
