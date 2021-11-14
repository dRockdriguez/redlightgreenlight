import { Action } from "@ngrx/store";
import { User } from "../../interfaces/user.interface";

export enum EUserActions {
    SetUserLogged = "[User] Set User Logged"
}

export class SetUserLogged implements Action {
    public readonly type = EUserActions.SetUserLogged;
    constructor(public payload: User) {}
}

export type UserActions = SetUserLogged;
