import React from 'react';
import {Button, Text} from 'react-native';

export default function SettingUser({route}: any) {
  const {showLogout} = route.params;
  return (
    <>
      <Text>Setting User {JSON.stringify(showLogout)}</Text>
      {JSON.stringify(showLogout) === 'true' ? (
        <Button title="Logout" />
      ) : (
        <></>
      )}
    </>
  );
}
