import { tpl } from "./enter.tpl";
import { Block, TAll, TChild } from "../../system/block/block";
import { connect } from "../../utils/hoc";
import { router } from "../../index";
import { routesPaths } from "../../consts/routes";
import { isLoggedIn } from "../../utils/is-logged-in";

export interface TPageEnterProps extends TAll {
  title: string;
  enterForm: TChild;
  attrs: {
    class: string;
  };
}

class PageEnter extends Block<TPageEnterProps> {
  constructor(props: TPageEnterProps, tagName: string = `main`) {
    super(props, tagName);
  }

  async componentDidMount(): Promise<void> {
    // console.log(`Enter form: CDM`);
    const data = await isLoggedIn();
    if (data) {
      // console.log(`Enter form: User is logged in. Routing to profile`);
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
