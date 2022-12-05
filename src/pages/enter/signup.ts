import { TOneChild } from "../../system/block/block";
import { PageEnter, TPageEnterProps } from "./enter";
import EnterForm, {
  TEnterFormProps,
} from "../../components/enter-form/enter-form";
import InputFieldBlock, {
  TIFBProps,
} from "../../components/input-field-block/input-field-block";
import { render } from "../../utils/render";
import {
  validateLogin,
  validatePassword,
  validateNotEmpty,
} from "../../utils/validate";
import { signInLink } from "../../components/link/models";
import { signUpSubmit } from "../../components/button/models";

const validateFieldCreator = (
  validator: (evt: string) => boolean,
  field: TOneChild,
  props: TIFBProps
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

const emailProps: TIFBProps = {
  type: `email`,
  placeholderText: `e-mail`,
  name: `email`,
  errorText: `Required`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
};

const loginProps: TIFBProps = {
  type: `text`,
  placeholderText: `login`,
  name: `login`,
  errorText: `Incorrect login`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
};

const firstNameProps: TIFBProps = {
  type: `text`,
  placeholderText: `first name`,
  name: `firstName`,
  errorText: `Required`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
};

const lastNameProps: TIFBProps = {
  type: `text`,
  placeholderText: `last name`,
  name: `lastName`,
  errorText: `Required`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
};

const phoneProps: TIFBProps = {
  type: `text`,
  placeholderText: `phone`,
  name: `phone`,
  errorText: `Required`,
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

const passwordProps2: TIFBProps = {
  type: `password`,
  placeholderText: `Password2`,
  name: `password2`,
  errorText: `Incorrect password`,
  attrs: {
    class: `enter-form__field-block field-block`,
  },
};

// <div class="enter-form__field-block field-block {{#if hasError}}field-block--has-error{{/if}}">
const emailField = new InputFieldBlock(emailProps);
const loginField = new InputFieldBlock(loginProps);
const firstNameField = new InputFieldBlock(firstNameProps);
const lastNameField = new InputFieldBlock(lastNameProps);
const phoneField = new InputFieldBlock(phoneProps);
const passwordField = new InputFieldBlock(passwordProps);
const passwordField2 = new InputFieldBlock(passwordProps2);

const validateEmailHandler = validateFieldCreator(
  validateNotEmpty,
  emailField,
  emailProps
);
const validateFirstNameHandler = validateFieldCreator(
  validateNotEmpty,
  firstNameField,
  firstNameProps
);
const validateLastNameHandler = validateFieldCreator(
  validateNotEmpty,
  lastNameField,
  lastNameProps
);
const validatePhoneHandler = validateFieldCreator(
  validateNotEmpty,
  phoneField,
  phoneProps
);

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

emailField.setProps({
  ...emailProps,
  events: {
    focusout: [validateEmailHandler],
    blur: [validateEmailHandler],
  },
});

loginField.setProps({
  ...loginProps,
  events: {
    focusout: [validateLoginHandler],
    blur: [validateLoginHandler],
  },
});

firstNameField.setProps({
  ...firstNameProps,
  events: {
    focusout: [validateFirstNameHandler],
    blur: [validateFirstNameHandler],
  },
});

lastNameField.setProps({
  ...lastNameProps,
  events: {
    focusout: [validateLastNameHandler],
    blur: [validateLastNameHandler],
  },
});

phoneField.setProps({
  ...phoneProps,
  events: {
    focusout: [validatePhoneHandler],
    blur: [validatePhoneHandler],
  },
});

passwordField.setProps({
  ...passwordProps,
  events: {
    focusout: [validatePasswordHandler],
    blur: [validatePasswordHandler],
  },
});

passwordField2.setProps({
  ...passwordProps2,
  events: {
    focusout: [validatePasswordHandler],
    blur: [validatePasswordHandler],
  },
});

const signInFields = [
  emailField,
  loginField,
  firstNameField,
  lastNameField,
  phoneField,
  passwordField,
  passwordField2,
];

const enterFormProps: TEnterFormProps = {
  enterFields: signInFields,
  submitButton: signUpSubmit,
  link: signInLink,
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
