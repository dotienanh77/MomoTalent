import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SInfo from 'react-native-sensitive-info';
import { BottomButton } from '@components';
import { FocusAwareStatusBar } from '@base';
import { apiGetDetail, SInfoOptions } from '@constants';
import { IPhoto, PhotoDetailNavigationProp } from '@types';
import { colors, responsive, width } from '@styles';
interface Props {
  navigation: PhotoDetailNavigationProp;
}
export const PhotoDetailScreen = (props: Props) => {
  const [photo, setPhoto] = useState<IPhoto>();
  const { navigation } = props;
  const onPress = () => {
    navigation.goBack();
  };
  const getData = async () => {
    const token = await SInfo.getItem('token', SInfoOptions);
    try {
      const res = await fetch(apiGetDetail, {
        method: 'GET',
        headers: {
          token: token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const resJ = await res.json();
      setPhoto(resJ);
    } catch (error) {
      console.log('===============================================');
      console.log('error', error);
      console.log('===============================================');
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    navigation.setOptions({ title: photo?.title });
  }, [navigation, photo?.title]);
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar />
      {/* <View style={styles.header}>
        <Text>{photo?.title}</Text>
      </View> */}
      <Image
        source={{
          uri: photo?.url,
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
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PINK,
    height: responsive(88),
    width,
  },
  image: {
    flex: 1,
    width,
    height: responsive(335),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
