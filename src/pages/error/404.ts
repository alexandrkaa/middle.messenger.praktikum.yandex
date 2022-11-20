import { Error } from "../../components/error/error";
import { Block, TAll, TChild } from "../../system/block/block";
// import { render } from "../../utils/render";
import { tpl } from "./error-page.tpl";

interface T404Props extends TAll {
  page404: TChild;
}

export class Page404 extends Block<T404Props> {
  constructor(props: T404Props) {
    super(`article`, props);
    console.log(props);
  }

  render(): DocumentFragment {
    return this.compile(tpl, this.props);
  }
}
const error = new Error({
  errorCode: `404`,
  errorText: `Not found`,
});

// const page = new Page404({
//   page404: error,
// });

export default error;

// render(`.app`, page);
