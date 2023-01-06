import { set } from "../../utils/mydash";
import { Indexed } from "../../utils/mydash/merge";
import { EventBus } from "../event-bus/event-bus";

enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public reset() {
    this.state = {};
  }

  public set(path: string, value: unknown) {
    const storeResult = set(this.state, path, value);
    this.emit(StoreEvents.Updated);
    return storeResult;
  }
}

const store = new Store();

export { store, StoreEvents };
