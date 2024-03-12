import React from 'react';
import {Button, Text} from 'react-native';

export default function LoginProfile({navigation}: any) {
  return (
    <>
      <Text>Input form profile</Text>
      <Button onPress={() => navigation.navigate('LoginFoto')} title="Submit" />
    </>
  );
}
