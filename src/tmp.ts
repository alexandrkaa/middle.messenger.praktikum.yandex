import { Block } from "./system/block/block";
import { render } from "./utils/render";
import { TAll } from "./system/block/block";
// import Handlebars from "handlebars";

interface TProps extends TAll {
  text?: string;
}

class Section extends Block<TProps> {
  constructor(props) {
    // Создаём враппер дом-элемент button
    super(`div`, props);
    // super(undefined, props);
  }

  render() {
    // В проекте должен быть ваш собственный шаблонизатор
    // const { text, __id } = this.props;
    const source = "<section>{{text}}</section>";
    // const template = Handlebars.compile(source);
    // return template({ text });
    const result = this.compile(source, this.props);
    console.log(result);
    return result;
  }
}

class Button extends Block<TProps> {
  constructor(props) {
    // Создаём враппер дом-элемент button
    super("button", props);
  }

  render() {
    const source = `
    {{#if self}}12345{{/if}}
    {{text}}`;
    const result = this.compile(source, this.props);
    return result;
  }
}

const props2 = {
  text: "!!! Attrs Buttom i am",
  self: false,
  events: {
    // Названия события точно такие же, как и у первого аргумента addEventListener:
    // click, mouseEnter, ...
    click: [
      (evt) => {
        console.log(`First click event`);
      },
      (evt) => {
        console.log(`Second click event`);
      },
    ],
  },
  settings: { withInternalID: true },
  attrs: {
    type: `button`,
    name: `btn1`,
  },
};

// const props3 = {
//   text: "Section inside",
//   events: {
//     // Названия события точно такие же, как и у первого аргумента addEventListener:
//     // click, mouseEnter, ...
//     click: [
//       (evt) => {
//         console.log(`First click event`);
//       },
//       (evt) => {
//         console.log(`Second click event`);
//       },
//     ],
//   },
//   settings: { withInternalID: true },
//   button: new Button({ ...props2, text: `Button inside` }),
// };

// const props1 = {
//   text: "Section i am",
//   events: {
//     // Названия события точно такие же, как и у первого аргумента addEventListener:
//     // click, mouseEnter, ...
//     click: [
//       (evt) => {
//         console.log(`Section`);
//       },
//     ],
//   },
//   settings: { withInternalID: true },
//   button: new Button(props2),
//   section2: new Section(props3),
// };

// const section = new Section(props1);

// app — это class дива в корне DOM
render(".app", new Button(props2));

// render(
//   `.app`,
//   new Section({ text: `test Section`, settings: { withInternalID: true } })
// );
// // Через секунду контент изменится сам, достаточно обновить пропсы
// setTimeout(() => {
//   button.setProps(props1);
//   console.log(`tik1`);
// }, 1000);

// setTimeout(() => {
//   button.setProps(props2);
//   console.log(`tik2`);
// }, 2000);

// setTimeout(() => {
//   button.hide();
// }, 3000);
