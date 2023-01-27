import { tpl } from "./profile.tpl";
import { Block, TAll, TChild } from "../../system/block/block";
import { connect } from "../../utils/hoc";
import { TSignUpBData, TSignUpFData } from "../../utils/adapters";

export interface TPageProfile extends TAll {
  profileBack?: TChild;
  profileLogout?: TChild;
  toProfile?: TChild;
  profileUpdate?: TChild;
  profilePassword?: TChild;
  profileForm?: TChild;
  user?: TSignUpBData | TSignUpFData;
  attrs?: {
    class: string;
  };
}

class PageProfile extends Block<TPageProfile> {
  constructor(props: TPageProfile, tagName = `main`) {
    super(props, tagName);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

export default connect(PageProfile, (state) => ({ user: state.user }));

// <div class="profile-block">
