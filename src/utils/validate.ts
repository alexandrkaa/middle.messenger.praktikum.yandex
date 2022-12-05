import { LOGIN_LENGTH, PASSWORD_REGEX } from "../consts/consts";

export const validateNotEmpty = (str: string | undefined): boolean => {
  if (str === undefined) return false;
  return str.length > 0;
};

export const validateLogin = (login: string | undefined): boolean => {
  if (login === undefined) return false;
  return login.length >= LOGIN_LENGTH;
};

export const validatePassword = (password: string | undefined): boolean => {
  if (password === undefined) return false;
  return PASSWORD_REGEX.test(password);
};
