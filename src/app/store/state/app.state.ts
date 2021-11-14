import { User } from "../../interfaces/user.interface";
import { initialUserState } from "./user.state";

export interface IAppState {
    user: User;
}

export const initialAppState: IAppState = {
    user: initialUserState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
