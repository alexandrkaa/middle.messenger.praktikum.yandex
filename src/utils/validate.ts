import { LOGIN_LENGTH, PASSWORD_REGEX } from "../consts/consts";

export const validateNotEmpty = (str: string): boolean => {
  return str.length > 0;
};

export const validateLogin = (login: string): boolean => {
  return login.length >= LOGIN_LENGTH;
};

export const validatePassword = (password: string): boolean => {
  return PASSWORD_REGEX.test(password);
};
