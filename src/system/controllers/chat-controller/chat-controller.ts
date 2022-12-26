import { ChatAPI } from "../../api/chat/chat";
import { TOptions } from "../../http-transport/http-transport";
// import { APP_MOUNT_POINT } from "../../../consts/consts";
// import { routesPaths } from "../../../consts/routes";
// import { store } from "../../store/store";
// import { Router } from "../../router/router";

// const router = new Router(APP_MOUNT_POINT);

type TResponse = {
  [key: string]: string;
};

const chatApi = new ChatAPI();

class ChatController {
  public async getChats(data: TOptions) {
    return chatApi
      .getChats(data)
      .then((res: TResponse) => {
        // return store.set("user", signUpBFAdapter(JSON.parse(res.response)));
        console.log(res.response);
      })
      .catch((e) => console.log(JSON.parse(e.responseText)));
  }
}

export default ChatController;
