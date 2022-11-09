import { tpl } from "./profile.tpl";
import { Block, TAll, TChild } from "../../system/block/block";

export interface TPageProfile extends TAll {
  avatarImgSrc: string;
  userName: string;
  profileForm: TChild;
  attrs: {
    class: string;
  };
}

export class PageProfile extends Block<TPageProfile> {
  constructor(props: TPageProfile) {
    super(`div`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <div class="profile-block">
