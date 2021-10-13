import { BaseAction, Concat } from './index';
import { GET_AVATARS, GET_USER, GET_USER_LIST, SUCCESS } from '../actionTypes';

export type Gender = 'male' | 'female';

export type Question = {
  id: number;
  text: string;
};
export type Answer = {
  id: number;
  text: string;
  question: Question;
};
export type Interest = {
  id: number;
  text: string;
  image: string;
};

export type Avatar = {
  id: number;
  name: string;
  code: string;
  image: string;
};

export type Meta = {
  continent: string | null;
  country: string | null;
  countryCode: string | null;
  region: string | null;
  city: string | null;
  latitude: null | number;
  longitude: null | number;
  dataSource: string | null;
  device: string | null;
  platform: string | null;
  browser: string | null;
};

export type QuizQuestion = {
  id: number;
  text: string;
  answerType: string;
  image: string;
};
export type QuizAnswer = {
  id: number;
  clientId: number;
  quizId: number;
  quizAnswerId: number;
  value: null | string;
  quiz: QuizQuestion;
  quizAnswer: {
    id: number;
    text: string;
    image: string;
  };
};

export type User = {
  id: number;
  email: string;
  emailVerifiedAt: null | string;
  createdAt: string;
  updatedAt: string;
  avatarId: number | null;
  photo?: null | string;
  gender: Gender;
  age: number;
  height: number;
  ip: string | null;
  about: null | string;
  meta: Meta | null;
  isWantToPay: 0 | 1;
  emailVerificationCode: string | null;
  birthday: null | string;
  nickname: string | null;
  profileAnswers: Answer[];
  quizzesAnswers: QuizAnswer[];
  interests: Interest[];
};

export type UsersReducer = {
  list: {
    [k: string]: User;
  };
  avatars: {
    [k: string]: Avatar;
  };
  loading: boolean;
  loaded: boolean;
};
interface GetUser extends BaseAction<typeof GET_USER> {}
interface GetUserSuccess
  extends BaseAction<Concat<typeof GET_USER, typeof SUCCESS>> {
  response: {
    cleint: User;
  };
}
interface GetUserList extends BaseAction<typeof GET_USER_LIST> {}
interface GetUserListSuccess
  extends BaseAction<Concat<typeof GET_USER_LIST, typeof SUCCESS>> {
  response: User[];
}

interface GetAvatars extends BaseAction<typeof GET_AVATARS> {}
interface GetAvatarsSuccess
  extends BaseAction<Concat<typeof GET_AVATARS, typeof SUCCESS>> {
  response: Avatar[];
}

export type UsersAction =
  | GetAvatarsSuccess
  | GetAvatars
  | GetUserList
  | GetUserListSuccess
  | GetUser
  | GetUserSuccess;
