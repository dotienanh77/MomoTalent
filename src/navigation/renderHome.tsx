import React from 'react';
import { RootStack } from './navigator';
import { PhotoDetailScreen, PhotoListScreen } from '@screens';

export const renderHome = () => {
  return (
    <>
      <RootStack.Screen
        name="PhotoList"
        component={PhotoListScreen}
        options={{
          title: 'Danh sách hình ảnh',
        }}
      />
      <RootStack.Screen
        name="PhotoDetail"
        component={PhotoDetailScreen}
        options={{
          title: '',
        }}
      />
    </>
  );
};
