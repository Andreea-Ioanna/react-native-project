import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Input from './../components/common/Input'

const LoginScreen = props => {
   return (
      <View>
          <Text>This is the login screen</Text>
            <Input error="My error message" />
      </View>
   );
}

const styles = StyleSheet.create({
   
});

export default LoginScreen;