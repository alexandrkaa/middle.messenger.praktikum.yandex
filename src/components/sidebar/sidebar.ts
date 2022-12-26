import { tpl } from "./sidebar.tpl";
import { Block, TAll, TChild } from "../../system/block/block";

export interface TPageSideBar extends TAll {
  profileLink: TChild;
  chatTabs: TChild;
  attrs: Record<string, string>;
}

export default class SideBar extends Block<TPageSideBar> {
  constructor(props: TPageSideBar, tagName: string = `main`) {
    super(props, tagName);
  }

  render(): DocumentFragment {
    const result = this.compile(tpl, this.props);
    return result;
  }
}

// <section class="chat__chats-list-block">
