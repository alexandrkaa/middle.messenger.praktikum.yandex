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
  constructor(props: TLinkProps, tagName = `a`) {
    super(props, tagName);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <a href="{{href}}" class="link {{class}}">
