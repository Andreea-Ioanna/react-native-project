import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/common/Input';
import { saveUser } from '../store/UserActions';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../App';

const EditProfileScreen = () => {
    // RootState instead of any
    const profileInfo = useSelector( (state: any) => state.user.loggedInUser);
    const [changeName, setChangeName] = useState(profileInfo.name); // lift up
    const [nameValid, setNameValid] = useState(false); // lift up - pass through props instead
    const dispatch = useDispatch();
    const navigation = useNavigation();
    // lifted up to this parent component.

    const handleSave = () => {
        if (nameValid) {
            // dispatch a redux action to save the new user obj.
            let user = {...profileInfo};
            user.name = changeName;
            // user.email = changeEmail;
            dispatch(saveUser(user)); // dispatching a redux action.
            navigation.goBack();
            console.log(true);
        } else {
            // Display an alert saying: Fix the errors.
            console.log(false);
        }
    };

   return (
      <View>
          <Text>Edit Profile Screen</Text>
          <Input label="Username"
            error="Please fill out your name"
            text={changeName} nameValid={nameValid}
            onValid={ (valid: any) => setNameValid(valid)}
            setContent={ (content: any) => setChangeName(content)}/>
        
        {/* <Input label="Email" value={profileInfo.email} 
            error="Please fill out your email"/> */}

            <Button title="Save" onPress={handleSave} />
      </View>
   );
}

const styles = StyleSheet.create({
   
});

export default EditProfileScreen;