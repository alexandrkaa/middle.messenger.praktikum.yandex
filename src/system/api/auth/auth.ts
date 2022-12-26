import { BaseAPI } from "../../base-api/base-api";
import { HTTPTransport, TOptions } from "../../http-transport/http-transport";
import { API_BASE_URL } from "../../../consts/consts";
import { TSignUpBData, TSignUpFData } from "../../../utils/adapters";

const authAPIInstance = new HTTPTransport(API_BASE_URL);
const AUTH_BASE_URL = `/auth`;

type TReg = TOptions & {
  data: TSignUpBData | TSignUpFData;
};

type TLogin = TOptions & {
  data: {
    login: string;
    password: string;
  };
};

class AuthAPI extends BaseAPI {
  public signUp(optionsAndData: TReg): Promise<unknown> {
    return authAPIInstance.post(`${AUTH_BASE_URL}/signup`, optionsAndData);
  }

  public signIn(optionsAndData: TLogin): Promise<unknown> {
    return authAPIInstance.post(`${AUTH_BASE_URL}/signin`, optionsAndData);
  }

  public user(): Promise<unknown> {
    return authAPIInstance.get(`${AUTH_BASE_URL}/user`);
  }

  public logOut(): Promise<unknown> {
    return authAPIInstance.post(`${AUTH_BASE_URL}/logout`);
  }
}

export { AuthAPI };
