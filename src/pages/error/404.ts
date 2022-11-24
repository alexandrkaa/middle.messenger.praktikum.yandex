import { Error } from "../../components/error/error";
import { Block, TAll, TChild } from "../../system/block/block";
import { tpl } from "./error-page.tpl";

interface T404Props extends TAll {
  page404: TChild;
}

const error = new Error({
  errorCode: `404`,
  errorText: `Not found`,
});

// console.log(error);

export class Page404 extends Block<T404Props> {
  constructor(props: T404Props) {
    super(`article`, { ...props, error: error });
  }

  render(): DocumentFragment {
    return this.compile(tpl, this.props);
  }
}

export default Page404;

// render(`.app`, page);
