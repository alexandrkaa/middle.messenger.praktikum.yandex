import { TList, Block, TAll } from "../block/block";
import { isPlainObject } from "../../utils/mydash/is_equal";
import { render } from "../../utils/render";

// export type ChildClass = { new (): Block<TAll> };
// export interface ChildClass {
//   new (): Block<TAll>;
// }
// export type ChildClass<T> = { new (): T };
// type TBlock = null | InstanceType<typeof Block<TAll>>;
type TBlock = null | IBlock;
export interface IBlock extends Block<TAll> {
  render(): DocumentFragment;
  new (): TBlock;
}

export class Route {
  private _pathname: string;
  private _blockClass: IBlock;
  private _block: null | InstanceType<IBlock>;
  private _props: TList;
  constructor(pathname: string, view: IBlock, props: TList) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      (this._block as unknown as Block<TAll>).hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      if (isPlainObject(this._props) && this._props.rootQuery) {
        render(this._props.rootQuery, this._block as unknown as Block<TAll>);
      }
      return;
    }

    this._block.show();
  }
}
