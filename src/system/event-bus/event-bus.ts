type Handler = (...args: unknown[]) => void;

export class EventBus {
  private readonly listeners: Record<string, Handler[]> = {};

  on(event: string, callback: Handler): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: Handler): void {
    this.listeners[event] = this.listeners[event].filter(
      (evt) => evt !== callback,
    );
  }

  emit(event: string, ...args: unknown[]) {
    // if (!this.listeners[event]) {
    //   throw new Error(`Нет события: ${event}`);
    // }
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => {
        listener(...args);
      });
    } else {
      console.error(`Нет события: ${event}`);
    }
  }
}
