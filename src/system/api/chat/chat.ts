import { BaseAPI } from "../../base-api/base-api";
import { HTTPTransport, TOptions } from "../../http-transport/http-transport";
import { API_BASE_URL } from "../../../consts/consts";

const chatAPIInstance = new HTTPTransport(API_BASE_URL);
const CHATS_BASE_URL = `/chats`;

export type TChat = TOptions & {
  data: {
    title: string;
  };
};

class ChatAPI extends BaseAPI {
  public getChats(optionsAndData: TOptions | undefined): Promise<unknown> {
    return chatAPIInstance.get(`${CHATS_BASE_URL}`, optionsAndData);
  }

  public createChat(optionsAndData: TChat): Promise<unknown> {
    return chatAPIInstance.post(`${CHATS_BASE_URL}`, optionsAndData);
  }
}

export { ChatAPI };
