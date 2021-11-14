import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../../interfaces/user.interface";
export const getUserState = createFeatureSelector<User>("user");
export const getUser = createSelector(getUserState, (state: User) => state);
