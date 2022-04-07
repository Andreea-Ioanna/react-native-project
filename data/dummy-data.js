import ChatMessage from "../models/ChatMessage";
import ChatRoom from "../models/ChatRoom";
import User from "../models/User";

export const USERS = [
    new User('1','Felix Sandgren', '1234', 'felix@sandgren.dk', '', 'MSc in Medicine', true),
    new User('2','Thomas Nielsen', '1234', 'felix2@sandgren.dk', '', 'MSc2 in Medicine', true)
];

export const CHATMESSAGES = [
    new ChatMessage('1',new Date(2021, 0, 1, 20, 10, 1), 'Hello anyone our there!', USERS[0]),
    new ChatMessage('2',new Date(2021, 0, 1, 20, 12, 1), 'Hello I am here', USERS[1]),
    new ChatMessage('3',new Date(2021, 0, 1, 20, 14, 1), 'Hello how are you!', USERS[0]),
    new ChatMessage('4',new Date(2021, 0, 1, 20, 15, 1), 'Hello looking at a React Native teacher right now..! and then some truncated text', USERS[1]),
];

export const CHATROOM = [
    new ChatRoom('1',new Date(2021, 0, 1, 2, 0, 0), 'CBS Surf', CHATMESSAGES),
    new ChatRoom('2',new Date(2021, 0, 1, 2, 1, 0), 'CBS Students', []),
    new ChatRoom('3',new Date(2021, 0, 1, 2, 2, 0), 'CBS Poker', [])
];