import { ChatAPI, TChat, TChatId, TUser, TUsers } from "../../api/chat/chat";
import { TMessage } from "../../ws/ws";
import { TOptions } from "../../http-transport/http-transport";
import { store } from "../../store/store";
import { TChatObj } from "../../api/chat/chat";
import WSocket from "../../ws/ws";
import { WEB_SOCKET_EVENTS } from "../../../consts/consts";
import { findToken } from "../../../utils/find-token";

type TResponse = {
  [key: string]: string;
};

const chatApi = new ChatAPI();

class ChatController {
  private WSockets: Record<number, WSocket> = {};
  static __instance: ChatController;
  constructor() {
    if (ChatController.__instance) {
      return ChatController.__instance;
    }
    this.createChat = this.createChat.bind(this);
    ChatController.__instance = this;
  }

  private _registerWSEvents(ws: WSocket, chatId: number) {
    ws.on(WEB_SOCKET_EVENTS.OPEN, () => {
      this._activateChatWS(chatId);
    });
    ws.on(WEB_SOCKET_EVENTS.MESSAGE, (data: string) => {
      const _data: TMessage = JSON.parse(data);
      if (_data.type !== `pong`) {
        this._saveMessage(chatId, _data);
      }
      console.log(data);
    });
    ws.on(WEB_SOCKET_EVENTS.CLOSE, (evt) => console.log(evt));
  }

  private _saveMessage(chatId: number, message: TMessage | TMessage[]): void {
    const msgs = store.getState().messages;
    if (msgs && msgs[chatId]) {
      store.set(`messages.${chatId}`, [...msgs[chatId], message]);
    } else {
      store.set(`messages.${chatId}`, [message]);
    }
    // console.log(store.getState().messages);
  }

  public async connectChat(chatId: number): Promise<void> {
    if (!this.WSockets[chatId]) {
      let _token = findToken(store.getState().chats, chatId);
      if (!_token) {
        await this.getToken({ data: { chatId: chatId } });
        _token = findToken(store.getState().chats, chatId) as string;
      }
      this.WSockets[chatId] = new WSocket(
        _token,
        chatId,
        store.getState().user.id
      );
      this._registerWSEvents(this.WSockets[chatId], chatId);
      this.WSockets[chatId].registerEvents();
      console.info(`Chat ${chatId} connected!`);
    } else {
      console.info(`Chat ${chatId} already connected!`);
    }
  }

  private _activateChatWS(chatId: number): void {
    this.WSockets[chatId].timerId = setInterval(() => {
      this.WSockets[chatId].message(`ping`, `ping`);
    }, 5000);
  }

  public async sendMessage(message: string, chatId: number): Promise<void> {
    this.WSockets[chatId].message(`message`, message);
  }

  public closeChatWS(chatId: number): void {
    if (this.WSockets[chatId]) {
      clearInterval(this.WSockets[chatId].timerId);
      this.WSockets[chatId].close();
      delete this.WSockets[chatId];
      console.log(`Chat ${chatId} closed`);
    } else {
      console.error(`Chat ${chatId} closing error`);
    }
  }

  public async createChat(data: TChat) {
    const self = this;
    return chatApi
      .createChat(data)
      .then((res: TResponse) => {
        console.log(JSON.parse(res.response));
        // return store.set("chats", JSON.parse(res.response));
      })
      .then(() => {
        self.chats();
      })
      .catch((err) => {
        console.log(JSON.parse(err.responseText));
      });
  }

  public async chats(data?: TOptions) {
    return chatApi
      .fetchChats(data)
      .then((res: TResponse) => {
        return store.set(`chats`, JSON.parse(res.response));
      })
      .catch((err) => {
        console.log(JSON.parse(err.responseText));
      });
  }

  public async getChats(data?: TOptions) {
    const chatsData = store.getState().chats;

    if (!chatsData) {
      await this.chats(data);
    }
    return store.getState().chats;
  }

  public async deleteChat(data: TChatId) {
    return chatApi.deleteChat(data).then((res: TResponse) => {
      const result = JSON.parse(res.response);
      const newChats = store
        .getState()
        .chats.filter((it: TChatObj) => it.id !== result.result.id);
      store.set(`chats`, newChats);
      store.set(`activeChatId`, undefined);
    });
  }

  public async searchUserByLogin(data: TUser) {
    return chatApi
      .searchUserByLogin(data)
      .then((res: TResponse) => JSON.parse(res.response))
      .catch((err) => console.log(JSON.parse(err.responseText)));
  }

  public async addUserToChat(data: TUsers) {
    // const self = this;
    return chatApi
      .addUserToChat(data)
      .then((res: TResponse) => {
        return JSON.parse(res.response);
      })
      .catch((err) => console.log(JSON.parse(err.responseText)));
  }

  public async removeUserFromChat(data: TUsers) {
    // const self = this;
    return chatApi
      .removeUserFromChat(data)
      .then((res: TResponse) => {
        return JSON.parse(res.response);
      })
      .catch((err) => console.log(JSON.parse(err.responseText)));
  }

  public async getToken(data: TChatId) {
    const chats = store.getState().chats;
    const activeChatId = store.getState().activeChatId;
    if (!chats.find((chat: TChatObj) => chat.id === activeChatId)?.token) {
      return chatApi
        .getToken(data)
        .then((res: TResponse) => {
          return JSON.parse(res.response);
        })
        .then((data) => {
          const newChats = chats.map((chat: TChatObj) => {
            if (chat.id === activeChatId) {
              return { ...chat, token: data.token };
            }
            return chat;
          });
          return store.set(`chats`, newChats);
        })
        .catch((err) => console.log(err.responseText));
    }
  }

  public getUnread(data: TChatId) {
    return chatApi
      .getUnread(data)
      .then((res: TResponse) => {
        return JSON.parse(res.response);
      })
      .then((data) => {
        return data;
      });
  }
}

export default ChatController;
