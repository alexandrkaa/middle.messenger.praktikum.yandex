import Link from "./link";
import { routesPaths } from "../../consts/routes";
import { router } from "../../index";
// import AuthController from "../../system/controllers/auth-controller/auth-controller";

// const authController = new AuthController();

const onLinkClick = (evt: Event) => {
  evt.preventDefault();
  const url = new URL((evt.target as HTMLLinkElement).href);
  router.go(url.pathname);
};

// const onLogout = (evt: Event) => {
//   evt.preventDefault();
//   authController.logout();
// };

const linksProps = {
  profile: {
    title: `Profile`,
    attrs: { class: `link`, href: routesPaths.PROFILE },
    events: {
      click: [onLinkClick],
    },
  },
  signUp: {
    title: `Sign Up`,
    attrs: {
      class: `link enter-form__link`,
      href: routesPaths.SIGN_UP,
    },
    events: {
      click: [onLinkClick],
    },
  },
  signIn: {
    title: `Sign In`,
    attrs: {
      class: `link enter-form__link`,
      href: routesPaths.SIGN_IN,
    },
    events: {
      click: [onLinkClick],
    },
  },
  profileBack: {
    title: ``,
    attrs: {
      class: `profile__back`,
      href: routesPaths.MAIN,
    },
    events: {
      click: [onLinkClick],
    },
  },
  profileEdit: {
    title: `Update profile`,
    attrs: {
      class: `link`,
      href: routesPaths.PROFILE_EDIT,
    },
    events: {
      click: [onLinkClick],
    },
  },

  profilePassword: {
    title: `Update password`,
    attrs: {
      class: `link`,
      href: routesPaths.PROFILE_PASSWORD,
    },
    events: {
      click: [onLinkClick],
    },
  },

  profileMain: {
    title: `To profile`,
    attrs: {
      class: `link`,
      href: routesPaths.PROFILE,
    },
    events: {
      click: [onLinkClick],
    },
  },
};

export const profileLink = new Link(linksProps.profile);
export const signInLink = new Link(linksProps.signIn);
export const signUpLink = new Link(linksProps.signUp);
export const profileBack = new Link(linksProps.profileBack);
export const profileEdit = new Link(linksProps.profileEdit);
export const profilePassword = new Link(linksProps.profilePassword);
export const profileMain = new Link(linksProps.profileMain);
