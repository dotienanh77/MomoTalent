import { apiGetList, SInfoOptions } from '@constants';
import { colors, responsive, typos } from '@styles';
import { IPhoto, PhotoListNavigationProp } from '@types';
import { nonAccentVietnamese } from '@utils';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SInfo from 'react-native-sensitive-info';

interface Props {
  navigation: PhotoListNavigationProp;
}
const keyExtractor = (item: IPhoto) => String(item.id);
export const PhotoListScreen = (props: Props) => {
  const [photoList, setPhotoList] = useState([]);
  const [search, setSearch] = useState('');
  const { navigation } = props;
  const getData = async () => {
    const token = await SInfo.getItem('token', SInfoOptions);
    try {
      const res = await fetch(apiGetList, {
        method: 'GET',
        headers: {
          token: token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const resJ = await res.json();
      setPhotoList(resJ);
    } catch (error) {
      console.log('===============================================');
      console.log('error', error);
      console.log('===============================================');
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const searchList = photoList.filter((item: IPhoto) => {
    const searchValue = nonAccentVietnamese(search);
    const title = nonAccentVietnamese(item.title || '');
    return title.includes(searchValue);
  });
  const onChangeText = (value: string) => {
    setSearch(value);
  };
  const renderItem = ({ item, index }: { item: IPhoto; index: number }) => {
    const onDetail = () => {
      navigation.navigate('PhotoDetail');
    };
    const backgroundColor = index % 2 !== 0 ? colors.CYAN : colors.SILVER;
    return (
      <TouchableOpacity
        style={[styles.photoItem, { backgroundColor }]}
        onPress={onDetail}
      >
        <Image
          style={styles.image}
          source={{
            uri: item?.thumbnailUrl || '',
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        placeholder={'Tìm kiếm...'}
        onChangeText={onChangeText}
        placeholderTextColor={colors.DARK}
        style={styles.input}
      />
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={searchList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  input: {
    ...typos.lg.regular,
    marginTop: responsive(20),
    alignSelf: 'center',
    backgroundColor: colors.WHITE,
    marginBottom: responsive(60),
    paddingLeft: responsive(20),
    width: responsive(335),
    height: responsive(60),
    borderColor: colors.DARK,
    borderWidth: responsive(2),
  },
  photoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsive(20),
    paddingVertical: responsive(10),
  },
  image: {
    width: responsive(60),
    height: responsive(60),
    borderRadius: responsive(30),
  },
  title: {
    ...typos.sm.regular,
    marginLeft: responsive(20),
    flex: 1,
  },
});
