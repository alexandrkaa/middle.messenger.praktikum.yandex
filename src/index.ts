import Page500 from "./pages/error/500";
import Page404 from "./pages/error/404";
import { Router } from "./system/router/router";

import { APP_MOUNT_POINT } from "./consts/consts";
const router = new Router(APP_MOUNT_POINT);
window.addEventListener("DOMContentLoaded", () => {
  router.use(`/404`, Page404).use(`/500`, Page500);
});
