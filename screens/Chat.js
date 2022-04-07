import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import ChatRoom from './../components/ChatRoom';
// import { CHATROOM } from './../data/dummy-data';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHappy } from './../store/ChatActions';

const Chat = props => {
    const dispatch = useDispatch();
    const happy = useSelector(state => state.chat.happy);    
    console.log("Are you happy? " + happy);

    const chatrooms = useSelector(state => state.chat.chatrooms); // selecting from redux store


    const onHappyHandler = () => {
        dispatch(toggleHappy());
    };

   return (
      <View style={styles.container}>
        
          <FlatList
            data={chatrooms}
            renderItem={itemData => (
                <ChatRoom chatroom={itemData.item}></ChatRoom>
            )}
            keyExtractor={item => item.id}
        />
        
        <View>
            <Button title="Flip happy value" onPress={onHappyHandler}/>
            <Text>{happy.toString()}</Text>
        </View>
      </View>
   );
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    },
});

export default Chat;