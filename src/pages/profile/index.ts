// import { Block, TAll, TChild } from "../../system/block/block";
import { PageProfile } from "./profile";
import { ProfileForm } from "../../components/profile-form/profile-form";
import { ProfileBlock } from "../../components/profile-block/profile-block";
import { render } from "../../utils/render";

const fields = [
  {
    title: "E-mail",
    value: "mail@gmail.com",
    formName: "email",
    type: "email",
  },
  {
    title: "Login",
    value: "avital",
    formName: "login",
    type: "text",
  },
  {
    title: "Avital",
    value: "Name",
    formName: "first_name",
    type: "text",
  },
  {
    title: "Andriani",
    value: "Lastname",
    formName: "second_name",
    type: "text",
  },
  {
    title: "Nickname",
    value: "avital",
    formName: "display_name",
    type: "text",
  },
  {
    title: "Phone",
    value: "+7 901 123 45 67",
    formName: "phone",
    type: "tel",
  },
];

const profileBlocks = fields.map(
  (field) =>
    new ProfileBlock({
      title: field.title,
      value: field.value,
      attrs: {
        class: `profile-block`,
      },
    })
);
const profileFormProps = {
  profileFields: profileBlocks,
  attrs: {
    class: `profile__form profile-form`,
  },
};
const profileForm = new ProfileForm(profileFormProps);

const pageProfileProps = {
  avatarImgSrc: `https://via.placeholder.com/130`,
  userName: `Avital`,
  profileForm: profileForm,
  attrs: {
    class: `profile-page`,
  },
};
const pageProfile = new PageProfile(pageProfileProps);

render(`.app`, pageProfile);
