import { EventBus } from "../event-bus/event-bus";
import { WS_API_BASE_URL } from "../../consts/consts";
import { WEB_SOCKET_EVENTS } from "../../consts/consts";

export type TMessage = {
  id?: string;
  time?: string;
  user_id?: string;
  content?: string;
  type: `file` | `message` | `pong`;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
};

class WSocket extends EventBus {
  public socket: WebSocket;
  public timerId: NodeJS.Timer | undefined = undefined;
  constructor(token: string, chatId: number, userId: number) {
    super();
    if (!token || !chatId || !userId) {
      throw new Error(`openSocket: Required parameter is missing.`);
    }
    this.socket = new WebSocket(
      `${WS_API_BASE_URL}/chats/${userId}/${chatId}/${token}`
    );
  }

  public async message(type: string, message?: string): Promise<unknown> {
    if (!message) {
      throw new Error(`WSocket message: message text is required!`);
    }

    const dataObj: Record<string, unknown> = {
      type: type,
    };
    if (message) {
      dataObj.content = message;
    }
    const data = JSON.stringify(dataObj);
    return this.socket.send(data);
  }

  public getUnread(start: number) {
    const data = JSON.stringify({
      content: `${start}`,
      type: `get old`,
    });
    return this.socket.send(data);
  }

  public close(): void {
    this.socket.close();
  }

  public registerEvents(): void {
    this.socket.addEventListener(WEB_SOCKET_EVENTS.OPEN, () => {
      this.emit(WEB_SOCKET_EVENTS.OPEN);
    });

    this.socket.addEventListener(WEB_SOCKET_EVENTS.CLOSE, () => {
      this.emit(WEB_SOCKET_EVENTS.CLOSE);
    });

    this.socket.addEventListener(WEB_SOCKET_EVENTS.ERROR, (err) => {
      this.emit(WEB_SOCKET_EVENTS.ERROR, err);
    });

    this.socket.addEventListener(WEB_SOCKET_EVENTS.MESSAGE, (data) => {
      this.emit(WEB_SOCKET_EVENTS.MESSAGE, data.data);
    });
  }
}

export default WSocket;
