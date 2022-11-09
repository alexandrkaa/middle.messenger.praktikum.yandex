import { v4 as makeUUID } from "uuid";
import { EventBus } from "../event-bus/event-bus";
import Handlebars from "handlebars";
import equal from "fast-deep-equal";
// import cloneDeep from "clone-deep";

type TMeta = {
  tagName: string;
  props: unknown;
};

type TList = {
  [key: string]: unknown;
};

type TEvents = Record<string, ((evt: Event) => void)[]>;

export type TChild = InstanceType<typeof Block> | InstanceType<typeof Block>[];
export type TChildren = { [key: string]: TChild };

export type TAll = {
  settings?: TList;
  events?: TEvents;
  attrs?: {
    [key: string]: string;
  };
};

export abstract class Block<TProps extends TAll> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
  } as const;

  protected _element: HTMLElement;
  protected _meta: TMeta;
  protected props: TList;
  protected attrs: TList;
  private children: TChildren;
  private eventBus: EventBus;
  private _events: TEvents;
  private readonly _id: string | null;

  constructor(tagName = "div", propsAndChildren: TProps) {
    const { children, props } = this._getChildren(propsAndChildren);
    // console.log(tagName);
    this.children = children;
    this._id = makeUUID();

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
    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this.eventBus = new EventBus();

    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _setAttrs(attrs) {
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
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps, newProps) {
    const result = !equal(oldProps, newProps);
    return result;
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount() {}

  private dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) return;
    this.attrs = (this.props.attrs as { [key: string]: string }) || {};
    this._setAttrs(this.attrs);
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    this._removeEvents();
    const block = this.render();
    this._element.innerHTML = ""; // удаляем предыдущее содержимое
    this._element.appendChild(block);
    this._addEvents();
  }

  abstract render(): DocumentFragment;

  public getContent() {
    return this._element;
  }

  private _makePropsProxy(props) {
    return new Proxy(props, {
      get: (target, prop) => {
        const value = target[prop];
        return typeof value === "function" ? value.bind(this) : value;
      },
      set: (target, prop, value) => {
        const oldTarget = { ...target };
        // const oldTarget = cloneDeep(target);
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
    // console.log(this._id);
    if (this._id !== null) {
      element.setAttribute("data-id", this._id);
    }
  }

  private _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    // this._setId(element);
    return element;
  }

  private _addEvents() {
    const { events = {} } = this.props;
    if (events instanceof Object) {
      const keys = Object.keys(events);
      if (keys.length > 0) {
        keys.forEach((eventName) => {
          events[eventName].forEach((handler) => {
            this._element.addEventListener(eventName, handler);
          });
        });
        this._events = events as TEvents;
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

  private _getChildren(propsAndChildren) {
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

  protected compile(template, props): DocumentFragment {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, block]) => {
      // console.log(key);
      if (Array.isArray(block)) {
        const line = block
          .map((it) => `<div data-id="${it._id}"></div>`)
          .join(``);
        propsAndStubs[key] = line;
      } else {
        propsAndStubs[key] = `<div data-id="${block._id}"></div>`;
      }
    });

    const fragment = this._createDocumentElement("template");

    const tpl = Handlebars.compile(template);
    // const tpl = new Handlebars.SafeString(template);
    // console.log(tpl);
    const strHtml = tpl(propsAndStubs);
    // console.log(strHtml);
    fragment.innerHTML = strHtml;

    Object.values(this.children).forEach((block) => {
      if (Array.isArray(block)) {
        block.forEach((it) => {
          const stub = fragment.content.querySelector(
            `[data-id="${(it as InstanceType<typeof Block>)._id}"]`
          );
          if (stub) {
            stub.replaceWith((it as InstanceType<typeof Block>).getContent());
          }
        });
      } else {
        const stub = fragment.content.querySelector(
          `[data-id="${(block as InstanceType<typeof Block>)._id}"]`
        );
        if (stub) {
          stub.replaceWith((block as InstanceType<typeof Block>).getContent());
        }
      }
    });

    // return fragment.content.childNodes[0];
    return fragment.content;
  }

  show() {
    this._element.style.display = `block`;
  }

  hide() {
    this._element.style.display = `none`;
  }
}
