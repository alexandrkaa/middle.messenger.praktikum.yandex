import Page500 from "./pages/error/500";
import Page404 from "./pages/error/404";
import IndexPage from "./pages/index";
import PageChat from "./pages/chat/chat";
import { Router } from "./system/router/router";
import { IBlock } from "./system/router/route";
import { routesPaths } from "./consts/routes";

import { APP_MOUNT_POINT } from "./consts/consts";
const router = new Router(APP_MOUNT_POINT);
window.addEventListener("DOMContentLoaded", () => {
  router
    .use(routesPaths.MAIN, IndexPage as unknown as IBlock)
    .use(routesPaths.NOT_FOUND, Page404 as unknown as IBlock)
    .use(routesPaths.SERVER_ERROR, Page500 as unknown as IBlock)
    .use(routesPaths.CHATS, PageChat as unknown as IBlock)
    .start();
});
