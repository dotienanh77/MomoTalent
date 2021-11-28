import { AuthContext } from '@contexts';
import { colors, typos } from '@styles';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStack } from './navigator';
import { renderAuthStack } from './renderAuth';
import { renderHome } from './renderHome';

export * from './navigator';

export const RootApp = () => {
  const { state } = useContext(AuthContext);

  if (state.loading) {
    return null;
  }

  const renderScreen = () => {
    if (!state?.user) {
      return renderAuthStack();
    } else {
      return renderHome();
    }
  };

  return (
    <RootStack.Navigator
      screenOptions={(props) => {
        const { route } = props;
        return {
          headerShown:
            route.name === 'PhotoList' || route.name === 'PhotoDetail',
          headerStyle: styles.header,
          headerTitleStyle: styles.title,
          headerTitleAlign: 'center',
          headerLeft: () => {
            return <View />;
          },
          title: '',
        };
      }}
    >
      {renderScreen()}
    </RootStack.Navigator>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.PINK,
    elevation: 0,
    shadowColor: colors.WHITE,
    shadowOpacity: 0,
  },
  title: { ...typos.lg.regular, color: colors.WHITE },
});
