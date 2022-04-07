import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Profile = props => {
   const navigation = useNavigation();
   const loggedInUser = useSelector(state => state.user.loggedInUser);

   return (
      <View>
          <Text>Profile</Text>
          <Text>{loggedInUser.name}</Text>
          <Text>{loggedInUser.email}</Text>
          <Text>{loggedInUser.title}</Text>
          <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
      </View>
   );
}

const styles = StyleSheet.create({
   
});

export default Profile;