import { tpl } from "./profile-form.tpl";
import { Block, TAll, TChild } from "../../system/block/block";
import { connect } from "../../utils/hoc";

import {
  TSignUpBData,
  TSignUpFData,
  signUpFBAdapter,
} from "../../utils/adapters";
import { router } from "../../index";
import { routesPaths } from "../../consts/routes";
import { isEqual } from "../../utils/mydash";
import { isLoggedIn } from "../../utils/is-logged-in";

export interface TProfileForm extends TAll {
  userName?: string;
  avatarImgSrc?: string;
  profileFields?: TChild;
  submitBtn?: TChild;
  user?: TSignUpBData | TSignUpFData;
  attrs?: {
    class: string;
  };
}

class ProfileForm extends Block<TProfileForm> {
  constructor(props: TProfileForm, tagName = `form`) {
    super(props, tagName);
  }

  async componentDidMount(): Promise<void> {
    // console.log(`Profile form: CDM`);
    const user = await isLoggedIn();
    if (!user) {
      router.go(routesPaths.SIGN_IN);
    }
    if (this.props.user) {
      this.setProps({
        userName: (this.props.user as TSignUpFData).displayName,
      });

      if ((this.props.user as TSignUpFData).avatar) {
        this.setProps({
          avatarImgSrc: (this.props.user as TSignUpFData).avatar as string,
        });
      }

      const pf = this.children.profileFields;
      if (Array.isArray(pf)) {
        const fields = signUpFBAdapter(this.getProps().user as TSignUpFData);
        pf.forEach((it) => it.setProps({ value: `` }));
        for (const field in fields) {
          pf.find((it) => it.getProps().formName === field)?.setProps({
            value: fields[field as keyof TSignUpBData],
          });
        }
      }
    }
  }

  componentDidUpdate(oldProps: TProfileForm, newProps: TProfileForm): boolean {
    // console.log(`Profile form: CDU`);
    if (!isEqual(oldProps, newProps)) {
      const pf = this.children.profileFields;
      if (Array.isArray(pf) && this.props.user) {
        const fields = signUpFBAdapter(this.props.user as TSignUpFData);
        pf.forEach((it) => it.setProps({ value: `` }));
        for (const field in fields) {
          pf.find((it) => it.getProps().formName === field)?.setProps({
            value: fields[field as keyof TSignUpBData],
          });
        }
      }
      if ((this.props?.user as TSignUpFData)?.avatar) {
        this.setProps({
          avatarImgSrc: (this.props.user as TSignUpFData).avatar as string,
        });
      }
      return true;
    }
    return false;
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

export default connect(ProfileForm, (state) => ({ user: state.user }));
// export default ProfileForm;

// <form class="profile__form profile-form"></form>;
