import { AppAction } from './app';
import { ChatAction } from './chat';
import { UsersAction } from './users';
import { ProfileAction } from './profiles';

export type ActionType = ProfileAction | UsersAction | ChatAction | AppAction;
