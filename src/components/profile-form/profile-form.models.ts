import {
  profileBlocks,
  profileBlocksEdit,
  profileBlocksPassword,
} from "../profile-block/profile-block.models";
import ProfileForm from "./profile-form";
import {
  profileEditSubmit,
  profilePasswordSubmit,
} from "../button/button.models";
import { getFormValues } from "../../utils/get-form-values";
import ProfileController from "../../system/controllers/profile-controller/profile-controller";
import { TReg, TPassword } from "../../system/api/profile/profile";

const profileController = new ProfileController();

const profileFormProps = {
  profileFields: profileBlocks,
  attrs: {
    class: `profile__form profile-form`,
  },
};

function onProfileUpdate(evt: SubmitEvent): void {
  evt.preventDefault();
  const formData = new FormData(evt.target as HTMLFormElement);
  const data = { data: getFormValues(formData) };
  profileController.updateProfile(data as TReg);
}

function onProfilePasswordUpdate(evt: SubmitEvent): void {
  evt.preventDefault();
  const formData = new FormData(evt.target as HTMLFormElement);
  const data = { data: getFormValues(formData) };
  profileController.updatePassword(data as TPassword);
}

function onProfileImgClick(evt: Event) {
  if ((evt.target as HTMLElement).tagName === `IMG`) {
    this.element.querySelector(`input[type="file"]`).click();
  }
}

function onProfileImgSelect(evt: Event) {
  if ((evt.target as HTMLElement).tagName === `INPUT`) {
    const target = evt.target as HTMLInputElement;
    if (target.type === `file`) {
      const formData = new FormData(evt.currentTarget as HTMLFormElement);
      const data = {
        data: formData,
      };
      profileController.updateAvatar(data);
    }
  }
}

const profileFormEditProps = {
  profileFields: profileBlocksEdit,
  submitBtn: profileEditSubmit,
  attrs: {
    class: `profile__form profile-form`,
  },
  events: {
    submit: [onProfileUpdate],
    click: [onProfileImgClick],
    change: [onProfileImgSelect],
  },
};

const profileFormPasswordProps = {
  profileFields: profileBlocksPassword,
  submitBtn: profilePasswordSubmit,
  attrs: {
    class: `profile__form profile-form`,
  },
  events: {
    submit: [onProfilePasswordUpdate],
  },
};

export const profileForm = new ProfileForm(profileFormProps);
export const profileFormEdit = new ProfileForm(profileFormEditProps);
export const profileFormPassword = new ProfileForm(profileFormPasswordProps);
