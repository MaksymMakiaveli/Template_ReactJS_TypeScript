import io from 'socket.io-client';
import { Middleware } from 'redux';
import reducer from '../redusers';
import { ActionType } from '../types/action';

export type RootState = ReturnType<typeof reducer>;

const server = process.env.REACT_APP_SOCKET_SERVER || '/';
export const socketIo = io(server, {
  transports: ['websocket'],
  withCredentials: true,
  autoConnect: false,
});

const socket: Middleware<{}, RootState> = (store) => {
  // socketIo.on('connect', () => {
  //   store.dispatch({ type: SOCKET_CONNECT + SUCCESS });
  // });
  // socketIo.on('disconnected', (response) => {
  //   store.dispatch({
  //     type: SOCKET_DISCONNECT,
  //     response,
  //   });
  // });

  return (next) => (action: ActionType) => {
    //   switch (action.type) {
    //     case SOCKET_CONNECT:
    //       socketIo.open();
    //       socketIo.emit(
    //         'auth-user',
    //         JSON.stringify({ token: window.localStorage.getItem('access-token') })
    //       );
    //       break;
    //     case TAKE_CHAT:
    //       socketIo.emit('join', JSON.stringify({ id: action.payload }));
    //       break;
    //     default:
    //       return next(action);
    //   }
    return next(action);
  };
};

export default socket;
