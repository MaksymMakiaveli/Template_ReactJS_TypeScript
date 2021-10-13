import { BaseAction, Concat } from './index';
import {
  FAIL,
  API,
  CLEAR_ERROR,
  GET_SERVER_DATE,
  SOCKET_CONNECT,
  GET_AVATARS,
  SUCCESS,
} from '../actionTypes';

export type AppReducer = {
  error: {
    title: string | string[] | null;
    errors?: {
      [k: string]: string[];
    };
  };
  serverTime: string;
  loaded: boolean;
  loading: boolean;
};

interface ApiFail extends BaseAction<Concat<typeof API, typeof FAIL>> {
  error: {
    data: {
      message: string | string[];
      errors?: {
        [k: string]: string[];
      };
      status?: string;
    };
  };
}

interface ClearError extends BaseAction<typeof CLEAR_ERROR> {}
interface ClearError extends BaseAction<typeof CLEAR_ERROR> {}

interface GetServerDate extends BaseAction<typeof GET_SERVER_DATE> {}
interface GetServerDateSuccess
  extends BaseAction<Concat<typeof GET_SERVER_DATE, typeof SUCCESS>> {
  response: string;
}

interface SocketConnect extends BaseAction<typeof SOCKET_CONNECT> {
  payload: string;
}

export type AppAction =
  | SocketConnect
  | GetServerDateSuccess
  | GetServerDate
  | ClearError
  | ApiFail;
