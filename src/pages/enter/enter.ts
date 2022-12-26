import { tpl } from "./enter.tpl";
import { Block, TAll, TChild } from "../../system/block/block";
import AuthController from "../../system/controllers/auth-controller/auth-controller";
import { connect } from "../../utils/hoc";
import { router } from "../../index";
import { routesPaths } from "../../consts/routes";

export interface TPageEnterProps extends TAll {
  title: string;
  enterForm: TChild;
  attrs: {
    class: string;
  };
}

const authController = new AuthController();
// authController.logout();
const isLoggedIn = async () => {
  const data = await authController.getUser();
  return data;
};

class PageEnter extends Block<TPageEnterProps> {
  constructor(props: TPageEnterProps, tagName: string = `main`) {
    super(props, tagName);
  }

  async componentDidMount(): Promise<void> {
    console.log(`Enter form: CDM`);
    const data = await isLoggedIn();
    if (data) {
      console.log(`Enter form: User is logged in. Routing to profile`);
      router.go(routesPaths.PROFILE);
    }
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

export default connect(PageEnter, (state) => state);
// export default PageEnter;

// <main class="enter-page">
