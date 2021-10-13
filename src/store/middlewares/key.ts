import { Middleware } from 'redux';
import { ActionType } from '../types/action';
import { keyGenerate } from '../../helpers';

const key: Middleware = (store) => (next) => (action: ActionType) => {
  if (!action.apiKey) {
    return next(action);
  }
  return next({
    ...action,
    apiKey: keyGenerate(store.getState().app.serverTime),
  });
};

export default key;
