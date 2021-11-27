import { LoginScreen, PhotoDetailScreen, PhotoListScreen } from '@screens';
import React from 'react';
import { RootStack } from './navigator';

export const renderHome = () => {
  return (
    <>
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="PhotoDetail" component={PhotoDetailScreen} />
      <RootStack.Screen name="PhotoList" component={PhotoListScreen} />
    </>
  );
};
