import { BottomButton } from '@components';
import { colors, responsive, width } from '@styles';
import { PhotoDetailNavigationProp } from '@types';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
interface Props {
  navigation: PhotoDetailNavigationProp;
}
export const PhotoDetailScreen = (props: Props) => {
  const { navigation } = props;
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://via.placeholder.com/600/92c952',
        }}
        style={styles.image}
      />
      <BottomButton onPress={onPress} title={'Trở lại'} />
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
  image: {
    flex: 1,
    width,
    height: responsive(335),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
