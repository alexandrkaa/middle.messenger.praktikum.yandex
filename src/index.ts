import Page500 from "./pages/error/500";
import Page404 from "./pages/error/404";
import IndexPage from "./pages/index";
import { Router } from "./system/router/router";
import { IBlock } from "./system/router/route";

import { APP_MOUNT_POINT } from "./consts/consts";
const router = new Router(APP_MOUNT_POINT);
window.addEventListener("DOMContentLoaded", () => {
  router
    .use(`/`, IndexPage as unknown as IBlock)
    .use(`/404`, Page404 as unknown as IBlock)
    .use(`/500`, Page500 as unknown as IBlock)
    .start();
});
