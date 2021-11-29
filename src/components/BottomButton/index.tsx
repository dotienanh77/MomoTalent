import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, responsive, typos, width } from '@styles';
interface Props {
  title?: string;
  onPress: () => void;
}
export const BottomButton = ({ title, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsive(60),
    width: width,
  },
  title: {
    ...typos.lg.bold,
    color: colors.WHITE,
  },
});
