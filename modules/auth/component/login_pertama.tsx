import React from 'react';
import {Button, Text} from 'react-native';

export default function LoginPertama({navigation}: any) {
  return (
    <>
      <Text>Login nope/google</Text>
      <Button
        onPress={() => navigation.navigate('LoginNope')}
        title="Login dengan phone"
      />
    </>
  );
}
