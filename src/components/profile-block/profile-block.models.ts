import ProfileBlockEdit from "./profile-block-edit";
import ProfileBlock from "./profile-block";

const fields = [
  {
    title: `E-mail`,
    value: ``,
    formName: `email`,
    type: `email`,
  },
  {
    title: `Login`,
    value: ``,
    formName: `login`,
    type: `text`,
  },
  {
    title: `Name`,
    value: ``,
    formName: `first_name`,
    type: `text`,
  },
  {
    title: `Lastname`,
    value: ``,
    formName: `second_name`,
    type: `text`,
  },
  {
    title: `Nickname`,
    value: ``,
    formName: `display_name`,
    type: `text`,
  },
  {
    title: `Phone`,
    value: ``,
    formName: `phone`,
    type: `tel`,
  },
];

const fieldsPassword = [
  {
    title: `Old password`,
    value: ``,
    formName: `oldPassword`,
    type: `password`,
  },
  {
    title: `New password`,
    value: ``,
    formName: `newPassword`,
    type: `password`,
  },
];

export const profileBlocks = fields.map(
  (field) => new ProfileBlock({
    title: field.title,
    value: field.value,
    formName: field.formName,
    type: field.type,
    attrs: {
      class: `profile-block`,
    },
  }),
);

export const profileBlocksEdit = [
  ...fields,
  {
    title: `Avatar`,
    value: ``,
    formName: `avatar`,
    type: `file`,
  },
].map((field) => {
  const props = {
    title: field.title,
    value: field.value,
    formName: field.formName,
    type: field.type,
    attrs: {
      class: `profile-block`,
      accept: ``,
    },
  };
  if (field.type === `file`) {
    props.attrs = {
      class: `profile-block visually-hidden`,
      accept: `image/*`,
    };
  }
  return new ProfileBlockEdit(props);
});

export const profileBlocksPassword = fieldsPassword.map(
  (field) => new ProfileBlockEdit({
    title: field.title,
    value: field.value,
    formName: field.formName,
    type: field.type,
    attrs: {
      class: `profile-block`,
    },
  }),
);
