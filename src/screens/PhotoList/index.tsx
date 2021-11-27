import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@styles';
interface Props {}
export const PhotoListScreen = (props: Props) => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text>PhotoListScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
});
