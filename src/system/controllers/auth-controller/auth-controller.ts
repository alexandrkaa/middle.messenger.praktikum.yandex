import { AuthAPI } from "../../api/auth/auth";
import {
  TSignUpBData,
  TSignUpFData,
  signUpFBAdapter,
  signUpBFAdapter,
} from "../../../utils/adapters";
import { TOptions } from "../../http-transport/http-transport";
import { APP_MOUNT_POINT } from "../../../consts/consts";
import { routesPaths } from "../../../consts/routes";
import { store } from "../../store/store";
import { Router } from "../../router/router";

const router = new Router(APP_MOUNT_POINT);

type TReg = TOptions & {
  data: TSignUpFData | TSignUpBData;
};

type TLogin = TOptions & {
  data: {
    login: string;
    password: string;
  };
};

type TResponse = {
  [key: string]: string;
};

const authApi = new AuthAPI();

class AuthController {
  public async registration(data: TReg) {
    const _data = signUpFBAdapter(data.data as TSignUpFData);
    data.data = _data;
    return authApi
      .signUp(data)
      .then((res: TResponse) => {
        console.log(res);
      })
      .then(() => {
        router.go(routesPaths.MAIN);
      })
      .catch((e) => console.log(JSON.parse(e.responseText)));
  }

  public async login(data: TLogin) {
    return authApi
      .signIn(data)
      .then((res: TResponse) => {
        console.log(res);
      })
      .then(() => {
        // console.log(`routing...`);
        router.go(routesPaths.CHATS);
      })
      .catch((e) => console.log(JSON.parse(e.responseText)));
  }

  public async logout() {
    return authApi
      .logOut()
      .then(() => {
        return store.set("user", undefined);
      })
      .then(() => {
        store.reset();
        router.go(routesPaths.SIGN_IN);
      })
      .catch((e) => console.log(e));
  }

  public async user() {
    return authApi
      .user()
      .then((res: TResponse) => {
        return store.set("user", signUpBFAdapter(JSON.parse(res.response)));
      })
      .then((data) => {
        return data as TSignUpBData;
      })
      .catch(() => {
        store.set("user", undefined);
      });
  }

  public async getUser() {
    const userData = store.getState().user;

    if (!userData) {
      await this.user();
    }
    return store.getState().user;
  }
}

export default AuthController;
export { TReg, TLogin };
