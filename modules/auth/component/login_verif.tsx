import React from 'react';
import {Button, Text} from 'react-native';

export default function LoginVerif({navigation}: any) {
  return (
    <>
      <Text>kode verifikasi</Text>
      <Button onPress={() => navigation.navigate('LoginPass')} title="Submit" />
    </>
  );
}
