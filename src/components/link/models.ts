import Link from "./link";
import { routesPaths } from "../../consts/routes";

const linksProps = {
  profile: {
    title: `Profile`,
    attrs: { class: `link`, href: routesPaths.PROFILE },
  },
  signUp: {
    title: `Sign Up`,
    attrs: {
      class: `link enter-form__link`,
      href: routesPaths.SING_UP,
    },
  },
  signIn: {
    title: `Sign In`,
    attrs: {
      class: `link enter-form__link`,
      href: routesPaths.SING_IN,
    },
  },
};

export const profileLink = new Link(linksProps.profile);
export const signInLink = new Link(linksProps.signIn);
export const signUpLink = new Link(linksProps.signUp);
