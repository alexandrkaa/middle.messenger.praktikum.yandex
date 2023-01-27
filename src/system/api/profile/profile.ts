import { BaseAPI } from "../../base-api/base-api";
import { HTTPTransport, TOptions } from "../../http-transport/http-transport";
import { API_BASE_URL } from "../../../consts/consts";
import { TSignUpBData, TSignUpFData } from "../../../utils/adapters";

const profileAPIInstance = new HTTPTransport(API_BASE_URL);
const PROFILE_BASE_URL = `/user`;

export type TReg = TOptions & {
  data: TSignUpBData | TSignUpFData | FormData;
};

export type TPassword = TOptions & {
  data: {
    oldPassword: string;
    newPassword: string;
  };
};

class ProfileAPI extends BaseAPI {
  public updateProfile(optionsAndData: TReg): Promise<unknown> {
    return profileAPIInstance.put(
      `${PROFILE_BASE_URL}/profile`,
      optionsAndData,
    );
  }

  public updateAvatar(optionsAndData: TReg): Promise<unknown> {
    return profileAPIInstance.put(
      `${PROFILE_BASE_URL}/profile/avatar`,
      optionsAndData,
    );
  }

  public updatePassword(optionsAndData: TPassword): Promise<unknown> {
    return profileAPIInstance.put(
      `${PROFILE_BASE_URL}/password`,
      optionsAndData,
    );
  }
}

export { ProfileAPI };
