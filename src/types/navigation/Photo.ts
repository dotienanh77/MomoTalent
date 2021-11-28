import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@navigation';

export type PhotoListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PhotoList'
>;
export type PhotoDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PhotoDetail'
>;
