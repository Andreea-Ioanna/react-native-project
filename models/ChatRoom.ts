import ChatMessage from "./ChatMessage";

class ChatRoom {
    id: string;
    createdDate: Date;
    name: string;
    chatMessages: ChatMessage[]


    constructor(id: string, createdDate: Date, name: string, chatMessages: ChatMessage[]){
        this.id = id;
        this.createdDate = createdDate;
        this.name = name;
        this.chatMessages = chatMessages;

    }
}

export default ChatRoom;