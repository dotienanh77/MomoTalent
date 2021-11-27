/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useReducer } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SInfo from 'react-native-sensitive-info';
// import SplashScreen from 'react-native-splash-screen';

import { AsyncStorageKey, SInfoOptions } from '@constants';
import { AuthState, IUser } from '@types';

interface AuthAction {
  type: 'INIT' | 'SIGN_IN';
  user?: IUser | Partial<IUser>;
  badRequest?: boolean;
}

const authReducer = (prevState: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'INIT':
      return {
        ...prevState,
        loading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        user: action.user as IUser,
        loading: false,
      };
  }
};

const initState: AuthState = {
  isFirstTime: true,
  user: undefined,
  loading: true,
};

export const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, initState);
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const token = await SInfo.getItem('token', SInfoOptions);
        const userString = await AsyncStorage.getItem(
          AsyncStorageKey.USER_INFO,
        );
        if (token && userString) {
          dispatch({ type: 'SIGN_IN', user: JSON.parse(userString) });
          return;
        } else if (state.isFirstTime) {
          dispatch({ type: 'INIT' });
        }
      } catch (error) {
        throw { 'Open app': error };
      }
    };
    bootstrapAsync();
  }, []);

  const funcAuth = useMemo(
    () => ({
      login: async ({ token, user }: { token: string; user: IUser }) => {
        await SInfo.setItem('token', token, SInfoOptions);
        await AsyncStorage.setItem(
          AsyncStorageKey.USER_INFO,
          JSON.stringify(user),
        );
        dispatch({ type: 'SIGN_IN', user });
      },
      init: async (callBack?: () => void) => {
        await AsyncStorage.setItem(AsyncStorageKey.INIT, JSON.stringify(true));
        dispatch({ type: 'INIT' });
        callBack && callBack();
      },
    }),
    [],
  );
  return { state, funcAuth };
};
