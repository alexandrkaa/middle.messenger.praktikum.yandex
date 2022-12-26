import { BaseAPI } from "../../base-api/base-api";
import { HTTPTransport, TOptions } from "../../http-transport/http-transport";
import { API_BASE_URL } from "../../../consts/consts";

const chatAPIInstance = new HTTPTransport(API_BASE_URL);
const CHATS_BASE_URL = `/chats`;

class ChatAPI extends BaseAPI {
  public getChats(optionsAndData: TOptions): Promise<unknown> {
    return chatAPIInstance.get(`${CHATS_BASE_URL}`, optionsAndData);
  }
}

export { ChatAPI };
