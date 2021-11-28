import { IPhoto } from '@types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ROOT
export type RootStackParamList = {
  Login: undefined;
  PhotoList: undefined;
  PhotoDetail?: { photo: IPhoto };
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();
