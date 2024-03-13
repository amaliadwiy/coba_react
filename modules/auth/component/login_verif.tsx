import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {
  useClearByFocusCell,
  CodeField,
  useBlurOnFulfill,
  Cursor,
} from 'react-native-confirmation-code-field';
import styles from '../component/styles';

export default function LoginVerif({navigation}: any) {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  function onSubmit() {
    console.log(value);
    navigation.navigate('LoginPass');
  }

  return (
    <>
      <Text>kode verifikasi</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <Button onPress={() => onSubmit()} title="Submit" />
    </>
  );
}
