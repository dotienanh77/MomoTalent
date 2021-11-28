import { BottomButton } from '@components';
import { apiLogin } from '@constants';
import { AuthContext } from '@contexts';
import { colors, responsive, typos } from '@styles';
import { isValidEmail } from '@utils';
import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

export const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeTextUserName = (value: string) => {
    setUserName(value);
  };
  const onChangeTextPassword = (value: string) => {
    setPassword(value);
  };
  const onLogin = async () => {
    try {
      const res = await fetch(apiLogin, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userName,
          password: password,
        }),
      });
      const resJ = await res.json();
      if (resJ?.token) {
        login({ token: resJ?.token, user: { name: userName } });
      } else {
        Alert.alert('Sai tài khoản hoặc mật khẩu.\nVui lòng kiểm tra lại.');
      }
    } catch (error) {
      console.log('===============================================');
      console.log('error', error);
      console.log('===============================================');
    }
  };
  const onBlur = () => {
    isValidEmail(userName)
      ? null
      : Alert.alert('Sai định dạng! \nVui lòng nhập lại Email');
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapInput}>
        <TextInput
          onBlur={onBlur}
          placeholder={'Username'}
          onChangeText={onChangeTextUserName}
          placeholderTextColor={colors.DARK}
          style={styles.input}
        />
        <TextInput
          placeholder={'Password'}
          onChangeText={onChangeTextPassword}
          placeholderTextColor={colors.DARK}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <BottomButton onPress={onLogin} title={'Đăng nhập'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PINK,
  },
  wrapInput: { flex: 1, justifyContent: 'center' },
  input: {
    backgroundColor: colors.WHITE,
    marginBottom: responsive(20),
    marginHorizontal: responsive(20),
    paddingLeft: responsive(20),
    height: responsive(60),
    ...typos.lg.regular,
  },
});
