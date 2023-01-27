import {
  LOGIN_LENGTH,
  PASSWORD_REGEX,
  EMAIL_REGEX,
  PHONE_REGEX,
} from "../consts/consts";
import InputFieldBlock from "../components/input-field-block/input-field-block";

type TInput = string | undefined;

export const validateNotEmpty = (str: TInput): boolean => {
  if (str === undefined) return false;
  return str.length > 0;
};

export const validateLogin = (login: TInput): boolean => {
  if (login === undefined) return false;
  return login.length >= LOGIN_LENGTH;
};

export const validatePassword = (password: TInput): boolean => {
  if (password === undefined) return false;
  return PASSWORD_REGEX.test(password);
};

export const validateEmail = (email: TInput): boolean => {
  if (email === undefined) return false;
  return EMAIL_REGEX.test(email);
};

export const validatePhone = (phone: TInput): boolean => {
  if (phone === undefined) return false;
  return PHONE_REGEX.test(phone);
};

export const inputErrorHelper = (
  validator: (str: string) => boolean,
  evt: Event,
  block: InputFieldBlock,
) => {
  const { value } = evt.target as HTMLInputElement;
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
  // if (evt.target) {
  //   console.log(evt.target);
  //   (evt.target as HTMLInputElement).focus();
  // }
};
