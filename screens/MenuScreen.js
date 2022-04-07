import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Profile from '../components/Profile';
import Notifications from '../components/Notifications';

const MenuScreen = props => {
   return (
      <View>
         <Text>Menu</Text>

         <Profile />

         <Notifications />
      </View>
   );
}

const styles = StyleSheet.create({
   
});

export default MenuScreen;