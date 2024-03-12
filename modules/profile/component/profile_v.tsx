import React from 'react';
import {Button, Text} from 'react-native';

function ProfileScreen({navigation}: any) {
  return (
    <>
      <Text>Profile nya</Text>
      <Button
        onPress={() => navigation.navigate('SettingUser')}
        title="Go to Settinga"
      />
    </>
  );
}

export default ProfileScreen;
