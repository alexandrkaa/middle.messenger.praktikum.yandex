import { Error } from "../../components/error/error";
import { Block, TAll, TChildren } from "../../system/block/block";
import { render } from "../../utils/render";
import { tpl } from "./error-page.tpl";

interface T404Props extends TAll {
  page404: TChildren;
}

export class Page404 extends Block<T404Props> {
  constructor(props) {
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

const page = new Page404({
  error,
});

render(`.app`, page);
