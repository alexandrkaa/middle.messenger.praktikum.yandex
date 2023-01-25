// import IndexPage from "./pages/index";
import "./styles.scss";
import Page500 from "./pages/error/500";
import Page404 from "./pages/error/404";
import PageEnter from "./pages/enter/enter";
import { signInProps, signUpProps } from "./pages/enter/enter.models";
import PageProfile from "./pages/profile/profile";
import {
  pageProfileProps,
  pageProfileEditProps,
  pageProfilePasswordProps,
} from "./pages/profile/profile.models";
import { Router } from "./system/router/router";
import { IBlock } from "./system/router/route";
import { routesPaths } from "./consts/routes";
import PageChat from "./pages/chat/chat";
import { propsPageChat } from "./pages/chat/chat.models";

import { APP_MOUNT_POINT } from "./consts/consts";
export const router = new Router(APP_MOUNT_POINT);
window.addEventListener("DOMContentLoaded", () => {
  router
    // .use(routesPaths.MAIN, IndexPage as unknown as IBlock, null)
    .use(routesPaths.MAIN, PageChat as unknown as IBlock, propsPageChat)
    .use(routesPaths.NOT_FOUND, Page404 as unknown as IBlock, null)
    .use(routesPaths.SERVER_ERROR, Page500 as unknown as IBlock, null)
    .use(routesPaths.CHATS, PageChat as unknown as IBlock, propsPageChat)
    .use(
      routesPaths.PROFILE_PASSWORD,
      PageProfile as unknown as IBlock,
      pageProfilePasswordProps
    )
    .use(
      routesPaths.PROFILE,
      PageProfile as unknown as IBlock,
      pageProfileProps
    )
    .use(
      routesPaths.PROFILE_EDIT,
      PageProfile as unknown as IBlock,
      pageProfileEditProps
    )
    .use(routesPaths.SIGN_UP, PageEnter as unknown as IBlock, signUpProps)
    .use(routesPaths.SIGN_IN, PageEnter as unknown as IBlock, signInProps)
    .start();
});
