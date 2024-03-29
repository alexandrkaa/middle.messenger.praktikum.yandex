import { v4 as makeUUID } from "uuid";
import { EventBus } from "../event-bus/event-bus";
import Handlebars from "handlebars";
import { isEqual } from "../../utils/mydash";

export type TMeta = {
  tagName: string;
  props: unknown;
};

export type TList = {
  [key: string | symbol]: unknown;
};

export type TAttrs = {
  [key: string]: string;
};

export type TEvent = (evt: Event) => void;
export type TEvents = Record<string, TEvent[]>;

export type TOneChild = InstanceType<typeof Block>;
export type TChild = TOneChild | TOneChild[];
export type TChildren = { [key: string]: TChild };

export type TAll = {
  [key: string | symbol]: unknown;
} & {
  settings?: TList;
  events?: TEvents;
  attrs?: TAttrs;
  __id?: string | null;
};

export abstract class Block<TProps extends TAll> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
    FLOW_CDUN: "flow:component-did-unmount",
  } as const;

  protected _element: HTMLElement;
  protected _meta: TMeta;
  protected props: TList;
  protected attrs: TAttrs;
  public children: TChildren;
  private eventBus: EventBus;
  private _events: TEvents;
  protected isMounted: boolean;
  private readonly _id: string | null;

  constructor(propsAndChildren: TProps, tagName = "div") {
    const { children, props } = this._getChildren(propsAndChildren);
    // console.log(tagName);
    this.children = children;
    this._id = makeUUID();
    this.isMounted = false;

    this._events = {};

    if (
      props.hasOwnProperty(`settings`) &&
      (props.settings as TList)?.withInternalID === false
    ) {
      this._id = null;
    }

    this.attrs = (props.attrs as { [key: string]: string }) || {};

    this._meta = {
      tagName,
      props,
    };

    this.children = children;
    this.props = this._makePropsProxy({ ...props, __id: this._id } as TProps);

    this.eventBus = new EventBus();

    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDUN, this._unmount.bind(this));
  }

  private _setAttrs(attrs: TAttrs) {
    const keys = Object.keys(attrs);
    if (keys.length > 0) {
      keys.forEach((key) => {
        this._element.setAttribute(key, attrs[key] as string);
      });
    }
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
    this._setId(this._element);
    this._setAttrs(this.attrs);
  }

  private init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((it) => it.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: TProps, newProps: TProps) {
    const result = !isEqual(oldProps, newProps);
    return result;
  }

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line
  protected componentDidMount(): void {}

  private dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: TProps, newProps: TProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) return;
    this.attrs = (this.props.attrs as { [key: string]: string }) || {};
    this._setAttrs(this.attrs);
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  setProps = (nextProps: TProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  getProps = (): TList => {
    return this.props;
  };

  get element() {
    return this._element;
  }

  get id() {
    return this._id;
  }

  private _render() {
    this._removeEvents();
    const block = this.render();
    this._element.innerHTML = ""; // удаляем предыдущее содержимое
    this._element.appendChild(block as unknown as DocumentFragment);
    this._addEvents();

    if (!this.isMounted) {
      this.isMounted = true;
      this.dispatchComponentDidMount();
    }
  }

  render() {}

  public getContent() {
    return this._element;
  }

  private _makePropsProxy(props: TAll) {
    return new Proxy(props, {
      get: (target, prop) => {
        const value = target[prop as string];
        return typeof value === "function" ? value.bind(this) : value;
      },
      set: (target, prop, value) => {
        const oldTarget = { ...target };
        target[prop] = value;
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  private _setId(element: HTMLElement) {
    if (this._id !== null) {
      element.setAttribute("data-id", this._id);
    }
  }

  private _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    return element;
  }

  private _addEvents() {
    const events: TEvents = this.props.events as TEvents;
    if (events !== undefined) {
      const keys = Object.keys(events as TEvents);
      if (keys.length > 0) {
        keys.forEach((eventName) => {
          events[eventName].forEach((handler: TEvent) => {
            const _event = handler.bind(this);
            if (!this._events[eventName]) {
              this._events[eventName] = [];
            }
            this._events[eventName].push(_event);
            this._element.addEventListener(eventName, _event);
          });
        });
      }
    }
  }

  private _removeEvents() {
    if (this._events instanceof Object) {
      const keys = Object.keys(this._events);
      if (keys.length > 0) {
        Object.keys(this._events).forEach((eventName) => {
          this._events[eventName].forEach((handler) => {
            this._element.removeEventListener(eventName, handler);
          });
        });
        this._events = {};
      }
    }
  }

  private _getChildren(propsAndChildren: TProps): {
    props: TList;
    children: TChildren;
  } {
    const children: TChildren = {};
    const props: {
      [key: string]: unknown;
    } = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value) && value[0] instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  protected compile(template: string, props: TList): DocumentFragment {
    const propsAndStubs = { ...(props as TAll) };

    Object.entries(this.children).forEach(([key, block]) => {
      if (Array.isArray(block)) {
        const line = block
          .map((it) => `<div data-id="${it._id}"></div>`)
          .join(``);
        propsAndStubs[key] = line;
      } else {
        propsAndStubs[key] = `<div data-id="${block._id}"></div>`;
      }
    });

    const fragment = this._createDocumentElement(
      "template"
    ) as HTMLTemplateElement;

    const tpl = Handlebars.compile(template);
    const strHtml = tpl(propsAndStubs);
    fragment.innerHTML = strHtml;

    Object.values(this.children).forEach((block) => {
      if (Array.isArray(block)) {
        block.forEach((it) => {
          const stub = fragment.content.querySelector(
            `[data-id="${(it as TOneChild)._id}"]`
          );
          if (stub) {
            stub.replaceWith((it as TOneChild).getContent());
          }
        });
      } else {
        const stub = fragment.content.querySelector(
          `[data-id="${(block as TOneChild)._id}"]`
        );
        if (stub) {
          stub.replaceWith((block as TOneChild).getContent());
        }
      }
    });

    return fragment.content;
  }

  // eslint-disable-next-line
  protected componentDidUnmount() {}

  private _unmount() {
    this.componentDidUnmount();
    this._removeEvents();
    this._element.parentElement!.innerHTML = ``;
  }

  unmount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDUN);
  }

  show() {
    this._element.style.display = `block`;
  }

  hide() {
    // console.log(this._element.parentElement);
    this._element.style.display = `none`;
  }

  getDataAttr(name: string): string | undefined {
    if (this._element.dataset?.[name]) {
      return this._element.dataset[name];
    }
    return undefined;
  }
}
