import { tpl } from "./error.tpl";
import { Block, TAll } from "../../system/block/block";

interface TErrorProps extends TAll {
  errorCode: string;
  errorText: string;
}

export class Error extends Block<TErrorProps> {
  constructor(props: TErrorProps) {
    super(`section`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}
