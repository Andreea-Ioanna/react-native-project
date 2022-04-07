import User from "./User";

export class ChatMessage {
    id: string;
    createdDate: Date;
    message: string;
    user: User;

    constructor(id: string, createdDate: Date, message: string, user: User) {
        this.id = id;
        this.createdDate = createdDate;
        this.message = message;
        this.user = user;
    }
}

export default ChatMessage;