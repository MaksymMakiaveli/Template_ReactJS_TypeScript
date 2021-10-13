import { BaseAction, Concat } from './index';
import { FAIL, LOGIN, LOGOUT, SUCCESS } from '../actionTypes';

interface Operator {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  lastVisitAt: string;
  accessToken: string;
}

export interface OperatorReducer {
  info: Operator | null;
  checking: boolean;
  checked: boolean;
  loginError: boolean;
}

interface Login extends BaseAction<typeof LOGIN> {}
interface LoginSuccess
  extends BaseAction<Concat<typeof LOGIN, typeof SUCCESS>> {
  response: {
    data: Operator;
  };
}
interface LoginFail extends BaseAction<Concat<typeof LOGIN, typeof FAIL>> {}

interface Logout extends BaseAction<typeof LOGOUT> {}
interface LogoutSuccess
  extends BaseAction<Concat<typeof LOGOUT, typeof SUCCESS>> {}

export type OperatorAction =
  | Login
  | LoginSuccess
  | LoginFail
  | Logout
  | LogoutSuccess;
