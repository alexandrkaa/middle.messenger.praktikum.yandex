import { Error } from "../../components/error/error";
import { Block, TAll, TChild } from "../../system/block/block";
// import { render } from "../../utils/render";
import { tpl } from "./error-page.tpl";

interface T500Props extends TAll {
  error: TChild;
}

const error = new Error({
  errorCode: `500`,
  errorText: `Server error`,
});
export class Page500 extends Block<T500Props> {
  constructor(props: T500Props, tagName = `article`) {
    super({ ...props, error }, tagName);
    console.log(props);
  }

  render(): DocumentFragment {
    return this.compile(tpl, this.props);
  }
}

// const page = new Page500({
//   error,
// });

export default Page500;

// render(`.app`, page);
