import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import {createChatroom} from './../store/ChatActions';
import Input from './../components/common/Input';

const NewChatroomScreen = props => {
    const dispatch = useDispatch();
    const [chatroomName, setChatroomName] = useState('');
   const [chatroomNameValid, setChatroomNameValid] = useState(false);
   
   return (
      <View style={styles.container}>
          <Input label="Chatroom Name"
            error="Please fill out your chatroom name"
            text={chatroomName} nameValid={chatroomNameValid}
            onValid={valid => setChatroomNameValid(valid)}
            setContent={content => setChatroomName(content)}/>

        <Button title="Save Chatroom" onPress={() => { dispatch(createChatroom(chatroomName)) }}/>
      </View>
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
   }
});

export default NewChatroomScreen;