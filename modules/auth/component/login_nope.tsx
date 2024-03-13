import {Input, InputField} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {Button, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function LoginNope({navigation}: any) {
  const [isPhone, setPhone] = useState('');
  const [isValid, setValid] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  function OnSubmit() {
    if (isPhone === '') {
      setValid(true);
      return false;
    } else {
      setValid(false);
      navigation.navigate('LoginKode');
    }
  }
  return (
    <>
      <Text>Lanjutkan dengan seluler</Text>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={isValid}
        isReadOnly={false}>
        <InputField placeholder="08..." onChangeText={setPhone} />
      </Input>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={isValid}
        isReadOnly={false}>
        <InputField
          placeholder="Pilih Tanggal"
          value={date.toLocaleDateString()}
          onPressIn={() => setOpen(true)}
        />
      </Input>
      <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Button onPress={() => OnSubmit()} title="Submit" />
    </>
  );
}
