import { ChatAPI, TChat } from "../../api/chat/chat";
import { TOptions } from "../../http-transport/http-transport";
// import { APP_MOUNT_POINT } from "../../../consts/consts";
// import { routesPaths } from "../../../consts/routes";
import { store } from "../../store/store";
// import { Router } from "../../router/router";

// const router = new Router(APP_MOUNT_POINT);

type TResponse = {
  [key: string]: string;
};

const chatApi = new ChatAPI();

class ChatController {
  public async createChat(data: TChat) {
    return chatApi
      .createChat(data)
      .then((res: TResponse) => {
        console.log(JSON.parse(res.response));
        // return store.set("chats", JSON.parse(res.response));
      })
      .then(() => {
        this.chats();
      })
      .catch((e) => console.log(JSON.parse(e.responseText)));
  }

  public async chats(data?: TOptions) {
    return chatApi
      .getChats(data)
      .then((res: TResponse) => {
        return store.set("chats", JSON.parse(res.response));
      })
      .catch((e) => {
        try {
          console.log(JSON.parse(e.responseText));
        } catch (err) {
          console.log(err, e);
        }
      });
  }

  public async getChats(data?: TOptions) {
    const chatsData = store.getState().chats;

    if (!chatsData) {
      await this.chats(data);
    }
    return store.getState().chats;
  }
}

export default ChatController;
