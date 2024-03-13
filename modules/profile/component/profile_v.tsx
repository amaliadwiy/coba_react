import React from 'react';
import {Button, Text} from 'react-native';

function ProfileScreen({navigation}: any) {
  return (
    <>
      <Text>Profile nya</Text>
      <Button
        onPress={() => navigation.navigate('SettingUser', {showLogout: true})}
        title="Go to Settinga"
      />
    </>
  );
}

export default ProfileScreen;
