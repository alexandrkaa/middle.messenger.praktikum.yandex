import { Block, TAll } from "../../system/block/block";
import { tpl } from "./index.tpl";

export default class IndexPage extends Block<TAll> {
  constructor(props: TAll) {
    super(`article`, { ...props });
  }

  render(): DocumentFragment {
    return this.compile(tpl, this.props);
  }
}
