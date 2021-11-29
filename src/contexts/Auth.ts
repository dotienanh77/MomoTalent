import { AuthState, IUser } from '@types';
import { createContext } from 'react';

interface IAuthContext {
  login: (argument: { token: string; user: IUser }) => void;
  init: (callBack?: () => void) => void;
  state: AuthState;
}
export const AuthContext = createContext({} as IAuthContext);
