import { BaseAPI } from "../../base-api/base-api";
import { HTTPTransport, TOptions } from "../../http-transport/http-transport";
import { BASE_URL } from "../../../consts/consts";
import { TSignUpBData, TSignUpFData } from "../../../utils/adapters";

const authAPIInstance = new HTTPTransport(BASE_URL);

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
    return authAPIInstance.post("/auth/signup", optionsAndData);
  }

  public signIn(optionsAndData: TLogin): Promise<unknown> {
    return authAPIInstance.post("/auth/signin", optionsAndData);
  }

  public user(): Promise<unknown> {
    return authAPIInstance.get("/auth/user");
  }

  public logOut(): Promise<unknown> {
    return authAPIInstance.post("/auth/logout");
  }
}

export { AuthAPI };
