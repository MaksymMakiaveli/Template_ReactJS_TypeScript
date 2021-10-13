import { BaseAction, Concat } from './index';
import {
  FAIL,
  REMOVE_CHAT,
  SELECT_CHAT,
  SOCKET_CONNECT,
  SOCKET_GET_CHAT_LIST,
  SOCKET_GET_MESSAGE,
  SOCKET_GET_MESSAGES,
  SOCKET_GET_NEW_CHAT,
  SOCKET_MARK_CHAT_AS_READ,
  SOCKET_SEND_FILE,
  SOCKET_SEND_MESSAGE,
  SUCCESS,
  TAKE_CHAT,
} from '../actionTypes';

export type ChatUser = {
  id: string;
  user_id: number;
};
export type MessageType =
  | 'text'
  | 'image'
  | 'audio'
  | 'video'
  | 'link'
  | 'geolocation';
export type Location = { lat: number; lng: number };

export type MessageForSend = {
  message: string | Location;
  id: string;
  type: MessageType;
};

export type FileForSend = {
  file: string;
  id: string;
  fileName: string;
};

export type Message = {
  id: string;
  chat_id: string;
  type: MessageType;
  message: string | Location;
  read: boolean;
  user: ChatUser;
  timestamp: number;
};

export type ChatReducer = {
  availableChat: {
    [k: string]: Chat;
  };
  takenChats: string[];
  connected: boolean;
  connecting: boolean;
  connectError: string;
  activeChat: string | null;
  messages: {
    list: {
      [k: string]: Message[];
    };
    loading: boolean;
  };
};

export type Chat = {
  id: string;
  created: string;
  new: number;
  timestamp: number;
  operator_id?: string;
  user: ChatUser;
  profile: ChatUser;
  message: Message;
};

interface SocketConnect extends BaseAction<typeof SOCKET_CONNECT> {}

interface SocketConnectSuccess
  extends BaseAction<Concat<typeof SOCKET_CONNECT, typeof SUCCESS>> {}
interface SocketConnectFail
  extends BaseAction<Concat<typeof SOCKET_CONNECT, typeof FAIL>> {
  response: string;
}
interface GetAllChats extends BaseAction<typeof SOCKET_GET_CHAT_LIST> {
  response: Chat[];
}
interface SelectChat extends BaseAction<typeof SELECT_CHAT> {
  payload: string;
}
interface TakeChat extends BaseAction<typeof TAKE_CHAT> {
  payload: string;
}
interface TakeChatSuccess
  extends BaseAction<Concat<typeof TAKE_CHAT, typeof SUCCESS>> {
  response: {
    id: string;
    companion_id: string;
  };
}

interface GetMessageList extends BaseAction<typeof SOCKET_GET_MESSAGES> {
  payload: string;
}

interface GetMessageListSuccess
  extends BaseAction<Concat<typeof SOCKET_GET_MESSAGES, typeof SUCCESS>> {
  payload: string;
  response: Message[];
}
interface GetMessageSuccess
  extends BaseAction<Concat<typeof SOCKET_GET_MESSAGE, typeof SUCCESS>> {
  response: Message;
}

interface SendMessage extends BaseAction<typeof SOCKET_SEND_MESSAGE> {
  payload: MessageForSend;
}
interface SendFile extends BaseAction<typeof SOCKET_SEND_FILE> {
  payload: FileForSend;
}
interface GetNewChat extends BaseAction<typeof SOCKET_GET_NEW_CHAT> {
  response: Chat;
}

interface RemoveChat
  extends BaseAction<Concat<typeof REMOVE_CHAT, typeof SUCCESS>> {
  response: {
    id: string;
    operator_id: number;
  };
}

interface MarkAsRead extends BaseAction<typeof SOCKET_MARK_CHAT_AS_READ> {
  payload: {
    id: string;
  };
}
interface MarkAsReadSuccess
  extends BaseAction<Concat<typeof SOCKET_MARK_CHAT_AS_READ, typeof SUCCESS>> {
  response: {
    chat_id: string;
  };
}

export type ChatAction =
  | RemoveChat
  | MarkAsReadSuccess
  | MarkAsRead
  | SocketConnectFail
  | SocketConnectSuccess
  | GetNewChat
  | GetMessageSuccess
  | SendFile
  | SendMessage
  | GetMessageListSuccess
  | GetMessageList
  | SelectChat
  | TakeChatSuccess
  | TakeChat
  | GetAllChats
  | SocketConnect;
