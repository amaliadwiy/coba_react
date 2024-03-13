import {Button, ButtonText} from '@gluestack-ui/themed';
import React from 'react';
import {Text} from 'react-native';

export default function LoginPertama({navigation}: any) {
  return (
    <>
      <Text>Login</Text>
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={() => navigation.navigate('LoginNope')}>
        <ButtonText>Login dengan Phone </ButtonText>
      </Button>
      <Button size="md" variant="solid" action="negative">
        <ButtonText>Google</ButtonText>
      </Button>
    </>
  );
}
