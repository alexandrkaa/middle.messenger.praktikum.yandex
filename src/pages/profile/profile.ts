import { tpl } from "./profile.tpl";
import { Block, TAll, TChild } from "../../system/block/block";

import { connect } from "../../utils/hoc";

import {
  TSignUpBData,
  TSignUpFData,
  // signUpFBAdapter,
} from "../../utils/adapters";

export interface TPageProfile extends TAll {
  // avatarImgSrc?: string;
  profileBack?: TChild;
  profileLogout?: TChild;
  toProfile?: TChild;
  profileUpdate?: TChild;
  profilePassword?: TChild;
  // userName?: string;
  profileForm?: TChild;
  user?: TSignUpBData | TSignUpFData;
  attrs?: {
    class: string;
  };
}

class PageProfile extends Block<TPageProfile> {
  constructor(props: TPageProfile, tagName: string = `main`) {
    super(props, tagName);
  }

  // async componentDidMount(): Promise<void> {
  //   // console.log(`Profile page: CDM`);
  // const user = await isLoggedIn();
  // if (!user) {
  //   router.go(routesPaths.SIGN_IN);
  // }
  // if (this.props.user) {
  //   this.setProps({
  //     userName: (this.props.user as TSignUpFData).displayName,
  //   });
  //   }
  // }

  // componentDidUpdate(oldProps: TPageProfile, newProps: TPageProfile): boolean {
  //   // console.log(`Profile page: CDU`);
  //   if (!isEqual(oldProps, newProps)) {
  //     if (this.props.user) {
  //       this.setProps({
  //         userName: (this.props.user as TSignUpFData).displayName,
  //       });
  //     }
  //     return true;
  //   }
  //   return false;
  // }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

export default connect(PageProfile, (state) => ({ user: state.user }));

// <div class="profile-block">
