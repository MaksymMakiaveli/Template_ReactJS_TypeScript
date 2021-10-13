import { BaseAction, Concat } from './index';
import { GET_PROFILES, SUCCESS } from '../actionTypes';

export type Image = {
  original: string;
  thumb: string;
};

type ProfileAnswer = {
  id: number;
  text: string;
  question: {
    id: number;
    text: string;
  };
};
type ProfileInterest = {
  id: number;
  text: string;
  image: string;
};

export type Profile = {
  id: number;
  name: string;
  distance: string;
  biography: string;
  isVerified: 0 | 1;
  age: number;
  height: number;
  isHot: 0 | 1;
  isActive: 0 | 1;
  isSticky: 0 | 1;
  birthDay: number;
  birthMonth: number;
  nickname: string;
  lookingFor: string;
  photo: string;
  photoOriginal: string;
  images: Image[];
  bday: string;
  profileAnswers: ProfileAnswer[];
  interests: ProfileInterest[];
  videos: string[];
  audios: string[];
  private: {
    images: {
      original: string;
      thumb: string;
    }[];
    videos: string[];
    audios: string[];
  };
};

export type ProfileReducer = {
  list: {
    [k: string]: Profile;
  };
  loading: boolean;
  loaded: boolean;
};

interface GetProfiles extends BaseAction<typeof GET_PROFILES> {}

interface GetProfilesSuccess
  extends BaseAction<Concat<typeof GET_PROFILES, typeof SUCCESS>> {
  response: Profile[];
}

export type ProfileAction = GetProfiles | GetProfilesSuccess;
