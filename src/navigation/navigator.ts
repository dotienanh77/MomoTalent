import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ROOT
export type RootStackParamList = {
  Login: undefined;
  PhotoList: undefined;
  PhotoDetail: undefined;
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();
