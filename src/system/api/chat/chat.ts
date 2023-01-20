import { BaseAPI } from "../../base-api/base-api";
import { HTTPTransport, TOptions } from "../../http-transport/http-transport";
import { API_BASE_URL } from "../../../consts/consts";
import { TSignUpBData } from "../../../utils/adapters";

const chatAPIInstance = new HTTPTransport(API_BASE_URL);
const CHATS_BASE_URL = `/chats`;
const USER_BASE_URL = `/user`;

export type TChat = TOptions & {
  data: {
    title: string;
  };
};

export type TChatId = TOptions & {
  data: {
    chatId: number;
  };
};

export type TUser = TOptions & {
  data: {
    login?: string;
    id?: number;
  };
};

export type TUsers = TOptions & {
  data: {
    users: number[];
    chatId: number;
  };
};

export type TChatObj = {
  id: number;
  title: string;
  avatar?: string;
  unread_count: number;
  token?: string;
  last_message: {
    user: TSignUpBData;
    time: string;
    content: string;
  } | null;
};

class ChatAPI extends BaseAPI {
  public fetchChats(optionsAndData: TOptions | undefined): Promise<unknown> {
    return chatAPIInstance.get(CHATS_BASE_URL, optionsAndData);
  }

  public getToken(optionsAndData: TChatId): Promise<unknown> {
    return chatAPIInstance.post(
      `${CHATS_BASE_URL}/token/${optionsAndData.data.chatId}`
    );
  }

  public createChat(optionsAndData: TChat): Promise<unknown> {
    return chatAPIInstance.post(CHATS_BASE_URL, optionsAndData);
  }

  public deleteChat(optionsAndData: TChatId): Promise<unknown> {
    return chatAPIInstance.delete(CHATS_BASE_URL, optionsAndData);
  }

  public searchUserByLogin(optionsAndData: TUser): Promise<unknown> {
    return chatAPIInstance.post(`${USER_BASE_URL}/search`, optionsAndData);
  }

  public addUserToChat(optionsAndData: TUsers): Promise<unknown> {
    return chatAPIInstance.put(`${CHATS_BASE_URL}/users`, optionsAndData);
  }

  public removeUserFromChat(optionsAndData: TUsers): Promise<unknown> {
    return chatAPIInstance.delete(`${CHATS_BASE_URL}/users`, optionsAndData);
  }

  public searchUserById(optionsAndData: TUser): Promise<unknown> {
    if (!optionsAndData.data.id) {
      throw new Error(`User ID is required`);
    }
    return chatAPIInstance.post(
      `${USER_BASE_URL}/${optionsAndData.data.id}`,
      optionsAndData
    );
  }

  public getUnread(optionsAndData: TChatId): Promise<unknown> {
    if (!optionsAndData.data.chatId) {
      throw new Error(`Chat ID is required`);
    }
    return chatAPIInstance.get(
      `${CHATS_BASE_URL}/new/${optionsAndData.data.chatId}`,
      optionsAndData
    );
  }
}

export { ChatAPI };
