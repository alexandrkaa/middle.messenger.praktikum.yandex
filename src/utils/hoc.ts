import { Indexed } from "./mydash/merge";
import { Block, TAll } from "../system/block/block";
import { store, StoreEvents } from "../system/store/store";
import { isEqual } from "./mydash";

// https://github.com/microsoft/TypeScript/issues/30355

// export function connect(mapStateToProps: (state: Indexed) => Indexed) {
//   return function (Component: typeof Block<TAll>): typeof Block<TAll> {
//     return class extends Component {
//       constructor(props: TAll, tagName: string) {
//         // сохраняем начальное состояние
//         let state = mapStateToProps(store.getState());

//         super({ ...props, ...state }, tagName);

//         // подписываемся на событие
//         store.on(StoreEvents.Updated, () => {
//           // при обновлении получаем новое состояние
//           const newState = mapStateToProps(store.getState());

//           // если что-то из используемых данных поменялось, обновляем компонент
//           if (!isEqual(state, newState)) {
//             this.setProps({ ...newState });
//           }

//           // не забываем сохранить новое состояние
//           state = newState;
//         });
//       }
//     };
//   };
// }

export function connect(
  Component: {
    new (props: TAll, tagName?: string): Block<TAll>;
  } & typeof Block<TAll>,
  mapStateToProps: (state: Indexed) => Indexed = (state) => state
): any {
  return class extends Component {
    constructor(props: TAll, tagName: string) {
      // сохраняем начальное состояние
      let state = mapStateToProps(store.getState());
      super({ ...props, ...state }, tagName);

      // подписываемся на событие
      store.on(StoreEvents.Updated, () => {
        // при обновлении получаем новое состояние
        const newState = mapStateToProps(store.getState());

        // если что-то из используемых данных поменялось, обновляем компонент
        if (!isEqual(state, newState)) {
          this.setProps({ ...newState });
        }

        // не забываем сохранить новое состояние
        state = newState;
      });
    }
  };
}
