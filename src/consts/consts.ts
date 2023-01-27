export const APP_MOUNT_POINT = `#app`;

export const DEFAULT_TIMEOUT = 5000;
export const METHODS: Record<string, string> = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  DELETE: `DELETE`,
};

export const LOGIN_LENGTH = 6;
export const PASSWORD_REGEX = /^([a-zA-Z0-9_]){3,}$/;
export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
export const PHONE_REGEX = /^([0-9]+){10,}$/;

export const API_BASE_URL = `https://ya-praktikum.tech/api/v2`;
export const WS_API_BASE_URL = `wss://ya-praktikum.tech/ws`;

export enum WEB_SOCKET_EVENTS {
  OPEN = `open`,
  CLOSE = `close`,
  MESSAGE = `message`,
  ERROR = `error`,
}
