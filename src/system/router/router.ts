import { Route, IBlock } from "./route";
import Page404 from "../../pages/error/404";

export class Router {
  public routes: Route[];
  public history: typeof window.history;
  private _rootQuery: string;
  private _currentRoute: null | Route;
  private _defaultPage: Route;
  static __instance: Router;
  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this._defaultPage = new Route(`/404`, Page404 as unknown as IBlock, {
      rootQuery: this._rootQuery,
    });
    Router.__instance = this;
  }

  use(pathname: string, block: IBlock) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    // Реагируем на изменения в адресной строке и вызываем перерисовку
    window.onpopstate = (event: PopStateEvent) => {
      this._onRoute((event.currentTarget as Window)?.location?.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    let route = this.getRoute(pathname);

    if (!route) {
      route = this._defaultPage;
      // return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
