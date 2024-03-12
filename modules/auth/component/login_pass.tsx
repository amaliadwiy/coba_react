import React from 'react';
import {Button, Text} from 'react-native';

export default function LoginPass({navigation}: any) {
  return (
    <>
      <Text>password</Text>
      <Button onPress={() => navigation.navigate('MenuUtama')} title="Upload" />
    </>
  );
}
