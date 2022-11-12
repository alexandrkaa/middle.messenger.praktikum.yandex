import { Error } from "../../components/error/error";
import { Block, TAll, TChild } from "../../system/block/block";
import { render } from "../../utils/render";
import { tpl } from "./error-page.tpl";

interface T500Props extends TAll {
  error: TChild;
}

export class Page500 extends Block<T500Props> {
  constructor(props: T500Props) {
    super(`article`, props);
    console.log(props);
  }

  render(): DocumentFragment {
    return this.compile(tpl, this.props);
  }
}
const error = new Error({
  errorCode: `500`,
  errorText: `Server error`,
});

const page = new Page500({
  error,
});

render(`.app`, page);
