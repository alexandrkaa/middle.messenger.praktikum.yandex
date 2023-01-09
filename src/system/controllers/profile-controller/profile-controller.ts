import { ProfileAPI, TReg, TPassword } from "../../api/profile/profile";
import { signUpBFAdapter } from "../../../utils/adapters";
import { APP_MOUNT_POINT } from "../../../consts/consts";
import { routesPaths } from "../../../consts/routes";
import { store } from "../../store/store";
import { Router } from "../../router/router";

const router = new Router(APP_MOUNT_POINT);

type TResponse = {
  [key: string]: string;
};

const profileApi = new ProfileAPI();

class ProfileController {
  public async updateProfile(data: TReg) {
    return profileApi
      .updateProfile(data)
      .then((res: TResponse) => {
        return store.set("user", signUpBFAdapter(JSON.parse(res.response)));
      })
      .then(() => {
        router.go(routesPaths.PROFILE);
      })
      .catch((e) => console.log(JSON.parse(e.responseText)));
  }

  public async updateAvatar(data: TReg) {
    return profileApi
      .updateAvatar(data)
      .then((res: TResponse) => {
        return store.set(
          "user.avatar",
          signUpBFAdapter(JSON.parse(res.response)).avatar
        );
      })
      .then(() => {
        router.go(routesPaths.PROFILE);
      })
      .catch((e) => console.log(JSON.parse(e.responseText)));
  }

  public async updatePassword(data: TPassword) {
    if (data.oldPassword !== data.newPassword) {
      throw new Error(`Passwords don\`t match`);
    }
    return profileApi
      .updatePassword(data)
      .then(() => {
        router.go(routesPaths.PROFILE);
      })
      .catch((e) => console.log(JSON.parse(e.responseText)));
  }
}

export default ProfileController;
