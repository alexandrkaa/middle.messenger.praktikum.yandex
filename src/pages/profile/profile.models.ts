import {
  profileForm,
  profileFormEdit,
  profileFormPassword,
} from "../../components/profile-form/profile-form.models";
import {
  profileBack as profileBackLink,
  profileEdit as profileEditLink,
  profilePassword as profilePasswordLink,
  profileMain as profileMainLink,
} from "../../components/link/link.models";
import { logOut as logOutBtn } from "../../components/button/button.models";

export const pageProfileProps = {
  // avatarImgSrc: `https://via.placeholder.com/130`,
  profileBack: profileBackLink,
  profileLogout: logOutBtn,
  profileUpdate: profileEditLink,
  profilePassword: profilePasswordLink,
  // userName: `Avital`,
  profileForm: profileForm,
  attrs: {
    class: `profile-page`,
  },
};

export const pageProfileEditProps = {
  // avatarImgSrc: `https://via.placeholder.com/130`,
  profileBack: profileBackLink,
  profileLogout: logOutBtn,
  toProfile: profileMainLink,
  profilePassword: profilePasswordLink,
  // userName: `Avital`,
  profileForm: profileFormEdit,
  attrs: {
    class: `profile-page`,
  },
};

export const pageProfilePasswordProps = {
  // avatarImgSrc: `https://via.placeholder.com/130`,
  profileBack: profileBackLink,
  profileLogout: logOutBtn,
  toProfile: profileMainLink,
  profileUpdate: profileEditLink,
  // userName: `Avital`,
  profileForm: profileFormPassword,
  attrs: {
    class: `profile-page`,
  },
};

// const pageProfile = new PageProfile(pageProfileProps);

// render(`.app`, pageProfile);
