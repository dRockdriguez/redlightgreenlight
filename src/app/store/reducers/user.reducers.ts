import { User } from "../../interfaces/user.interface";
import * as user from "../actions/user.actions";
import { initialUserState } from "../state/user.state";

export const userReducers = (
    state = initialUserState,
    action: user.UserActions
): User => {
    switch (action.type) {
        case user.EUserActions.SetUserLogged: {
            return {
                ...state,
                ...action.payload
            };
        }

        default:
            return { ...state };
    }
};
