// import { Block, TAll, TChild } from "../../system/block/block";
import { PageEnter, TPageEnterProps } from "./enter";
import {
  EnterForm,
  TEnterFormProps,
} from "../../components/enter-form/enter-form";
import {
  InputFieldBlock,
  TIFBProps,
} from "../../components/input-field-block/input-field-block";
import { render } from "../../utils/render";
import { validateLogin, validatePassword } from "../../utils/validate";

const validateFieldCreator = (
  validator: (evt: string) => boolean,
  field,
  props
) => {
  return (evt: FocusEvent): void => {
    const value = (evt.target as HTMLInputElement).value;
    if (!validator(value)) {
      field.setProps({
        ...props,
        attrs: {
          class: `enter-form__field-block field-block field-block--has-error`,
        },
      });
    } else {
      field.setProps({
        ...props,
        attrs: {
          class: `enter-form__field-block field-block`,
        },
      });
    }
  };
};

const loginProps: TIFBProps = {
  type: `text`,
  placeholderText: `Login`,
  name: `login`,
  errorText: `Incorrect login`,
  attrs: {
    class: `enter-form__field-block field-block`,
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
};

// <div class="enter-form__field-block field-block {{#if hasError}}field-block--has-error{{/if}}">
const loginField = new InputFieldBlock(loginProps);
const passwordField = new InputFieldBlock(passwordProps);

const validateLoginHandler = validateFieldCreator(
  validateLogin,
  loginField,
  loginProps
);
const validatePasswordHandler = validateFieldCreator(
  validatePassword,
  passwordField,
  passwordProps
);
loginField.setProps({
  ...loginProps,
  events: {
    focusout: [validateLoginHandler],
    blur: [validateLoginHandler],
  },
});

passwordField.setProps({
  ...passwordProps,
  events: {
    focusout: [validatePasswordHandler],
    blur: [validatePasswordHandler],
  },
});

const signInFields = [loginField, passwordField];

const enterFormProps: TEnterFormProps = {
  enterFields: signInFields,
  submitTitle: `Sign In`,
  linkTitle: `Sign Up`,
  link: `./signup.html`,
  attrs: {
    class: `enter__form enter-form`,
  },
};
const enterForm = new EnterForm(enterFormProps);

const props: TPageEnterProps = {
  title: `Sign In`,
  enterForm: enterForm,
  attrs: {
    class: `enter-page`,
  },
};
const pageEnter = new PageEnter(props);

render(`.app`, pageEnter);
