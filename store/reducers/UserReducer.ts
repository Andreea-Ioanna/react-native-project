import User from '../../models/User';
import { SAVE_USER, SIGNUP } from '../UserActions';
import { USERS } from '../../data/dummy-data';
import { tassign } from 'tassign';

export interface UserState {
    loggedInUser: User | undefined;
    idToken: string | undefined;
}
export interface Action {
    type: string;
    payload: any | undefined;
}

const initialState: UserState = {
    loggedInUser: undefined,
    idToken: undefined,
    // email: ''
    //...
}

const UserReducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {
        case SIGNUP:
        {
            return { ...state, 
                loggedInUser: new User(action.payload.localId, action.payload.email), 
                idToken: action.payload.idToken 
            };
        }

        case SAVE_USER:
        {
            return tassign(state, { loggedInUser: action.payload, idToken: action.payload.idToken });
            
            // return { ...state, user: action.payload }
        }
        // case TOGGLE_HAPPY:
        //     return {
        //         ...state, 
        //         happy: !state.happy
        //     }
 
        // case NEW_CHAT:
            //

        default:
            return state;
    }
}


export default UserReducer;