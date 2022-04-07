import { ADD_TO_TEST, TOGGLE_HAPPY, NEW_CHATMESSAGE, FETCHED_CHATROOMS } from '../ChatActions';
// import from dummy data to access chat
import { CHATROOM } from '../../data/dummy-data';
import ChatRoom from '../../models/ChatRoom';
import { Action } from './UserReducer';
import { tassign } from 'tassign';
import ChatMessage from '../../models/ChatMessage';

export interface ChatState {
    happy: Boolean;
    test: string[];
    chatrooms: ChatRoom[];
}

const initialState: ChatState = {
    happy: false,
    test: ['Hi', 'There'],
    chatrooms: CHATROOM,
    //...
}

const ChatReducer = (state: ChatState = initialState, action: Action) => {
    switch (action.type) {
        case FETCHED_CHATROOMS:
            return tassign(state, {chatrooms: action.payload});
        
        // Call a new action creator, that you create, when clicking the button. Pass relevant info. in payload.
        // 1: find the right chatroom in the array and copy the chatmessages array.
        case NEW_CHATMESSAGE:
            const chatroom = state.chatrooms
                .find(room => room.id === action.payload.chatroomId) as ChatRoom;
            const chatmessages: ChatMessage[] = [...chatroom.chatMessages, action.payload.message];

            
            // 2: Copy chatroom object and attach new chat array that you copied.
            const newChatRoom: ChatRoom = { ...chatroom };
            newChatRoom.chatMessages = chatmessages;

            //3: Insert the new chatroom object into the array of chatrooms
            // Hint: use js-array's findIndex function, to find the index in the array of the object we want.
            // js Splice method to create a new array and insert the created chatroom object.
            
            const index: number = state.chatrooms.findIndex(room => room.id === action.payload.chatroomId);
            const chatroomArray: ChatRoom[] = [...state.chatrooms];
            chatroomArray.splice(index, 1, newChatRoom);

            return tassign(state, { chatrooms: chatroomArray });

            // return {
            //     ...state,
            //     chatrooms: chatroomArray
            // };

        case ADD_TO_TEST: 
            console.log("reducer "+ action.payload);
            // Adds the new value to the array, but without making state mutations.
            return {
                ...state,
                test: [...state.test, action.payload]
            }

        case TOGGLE_HAPPY:
            return {
                ...state, 
                happy: !state.happy
            }
 
        // case NEW_CHAT:
            //

        default:
            return state;
    }
}


export default ChatReducer;