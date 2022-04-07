import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export interface Props {
    label: string;
    text: string;
    error: string;
    nameValid: boolean;
    onValid(arg: boolean) : void;
    setContent: (arg: string) => void; 
}

const Input = ( {label='My default value', text, error, nameValid, onValid, setContent} : Props)  => {
    const [touched, setTouched] = useState(false);

    const handleNewInput = (enteredText: string) => {
        setTouched(true);
        enteredText === '' ? onValid(false) : onValid(true);
        setContent(enteredText);
    };

   return (
      <View>
          <Text>{label}</Text>
          <TextInput value={text} 
            onChangeText={handleNewInput}
            onBlur={() => setTouched(true)}></TextInput>
            {!nameValid && touched && <Text>{error}</Text>}
      </View>
   );
}

const styles = StyleSheet.create({
   
});

export default Input;