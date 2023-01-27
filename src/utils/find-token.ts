import { TChatObj } from "../system/api/chat/chat";

export const findToken = (
  chats: TChatObj[],
  chatId: number,
): string | undefined => chats.find((it: TChatObj) => it.id === chatId)?.token;
