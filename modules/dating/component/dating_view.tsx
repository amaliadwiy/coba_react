import React from 'react';
import {Button, Text} from 'react-native';

export default function DatingView({navigation}: any) {
  return (
    <>
      <Text>DatingView nya</Text>
      <Button
        onPress={() => navigation.navigate('SettingUser')}
        title="Go to Settinga"
      />
    </>
  );
}
