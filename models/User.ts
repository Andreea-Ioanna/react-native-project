class User {

    constructor(public id: string, public email: string, 
        public name?: string, public image?: string, 
        public title?: string, public chatNotification?: boolean)
    {
    }
}

export default User;