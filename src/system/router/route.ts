import { TList, Block, TAll } from "../block/block";
import { isPlainObject } from "../../utils/mydash/is-equal";
import { render } from "../../utils/render";

export interface IBlock extends Block<TAll> {
  render(): DocumentFragment;
  new (props: TAll | null | undefined): Block<TAll>;
}

export class Route {
  private _pathname: string;

  private _blockClass: IBlock;

  private _block: null | InstanceType<IBlock>;

  private _props: TList;

  private _blockProps: TAll | null | undefined;

  constructor(
    pathname: string,
    view: IBlock,
    props: TList,
    blockProps: TAll | null | undefined,
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
    this._blockProps = blockProps || undefined;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      // this._block.hide();
      this._block.unmount();
      this._block = null;
    }
  }

  match(pathname: string) {
    // TODO: сделать регулярку, чтобы можно было пути /messenger/203
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      // console.log(this._blockProps);
      this._block = new this._blockClass(this._blockProps);
      if (isPlainObject(this._props) && this._props.rootQuery) {
        render(this._props.rootQuery, this._block);
      }
      return;
    }

    this._block.show();
  }
}
