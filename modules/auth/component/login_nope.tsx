import React from 'react';
import {Button, Text} from 'react-native';

export default function LoginNope({navigation}: any) {
  return (
    <>
      <Text>nope</Text>
      <Button onPress={() => navigation.navigate('LoginKode')} title="Submit" />
    </>
  );
}
