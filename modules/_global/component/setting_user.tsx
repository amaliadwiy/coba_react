import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useState} from 'react';
import {Button, Platform, Text, View} from 'react-native';

export default function SettingUser({route}: any) {
  const {showLogout} = route.params;
  const [value, setValue] = useState({values: [0, 37]});
  const multiSliderValuesChange = (values: any) => {
    setValue({
      values,
    });
  };

  return (
    <>
      <Text>Setting User {JSON.stringify(showLogout)}</Text>
      <MultiSlider
        values={[value.values[0], value.values[1]]}
        sliderLength={200}
        selectedStyle={{backgroundColor: '#CD5808'}}
        containerStyle={{alignSelf: 'center', marginTop: -10}}
        onValuesChange={multiSliderValuesChange}
        markerStyle={{
          ...Platform.select({
            android: {
              height: 13,
              width: 13,
              borderRadius: 50,
              backgroundColor: '#CD5808',
            },
          }),
        }}
        min={0}
        max={37}
        step={1}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -20,
        }}>
        <Text>{value.values[0]} min</Text>
        <Text> - </Text>
        <Text>{value.values[1]} max </Text>
      </View>
      {JSON.stringify(showLogout) === 'true' ? (
        <Button title="Logout" />
      ) : (
        <></>
      )}
    </>
  );
}
