import { tpl } from "./link.tpl";
import { Block, TAll } from "../../system/block/block";

interface TLinkProps extends TAll {
  title: string;
  attrs: {
    class: string;
    href: string;
  };
}

export default class Link extends Block<TLinkProps> {
  constructor(props: TLinkProps) {
    super(`a`, props);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <a href="{{href}}" class="link {{class}}">
