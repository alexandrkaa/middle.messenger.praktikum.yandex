import { tpl } from "./profile-form.tpl";
import { Block, TAll, TChild } from "../../system/block/block";

export interface TProfileForm extends TAll {
  profileFields: TChild;
  attrs: {
    class: string;
  };
}

export class ProfileForm extends Block<TProfileForm> {
  constructor(props: TProfileForm) {
    super(`form`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <form class="profile__form profile-form"></form>;
