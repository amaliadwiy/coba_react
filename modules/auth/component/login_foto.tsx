import React from 'react';
import {Button, Text} from 'react-native';

export default function LoginFoto({navigation}: any) {
  return (
    <>
      <Text>upload foto</Text>
      <Button
        onPress={() => navigation.navigate('LoginPertama')}
        title="Upload"
      />
    </>
  );
}
