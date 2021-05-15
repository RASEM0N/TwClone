import { Selector } from 'reselect'
import { StateType } from '../store'
import { LoadingStateEnum, UserPublicType } from "../types";
import { InitialStateType } from "./otherUsers-types";

// state
export const getOtherUsersState: Selector<StateType, InitialStateType> = (state) => state.otherUsers
// users
export const getUsers: Selector<StateType, UserPublicType[]> = (state) =>
  getOtherUsersState(state).items
// user
export const getUserById: Selector<StateType, UserPublicType | null> = (state) =>
  getOtherUsersState(state).item

// --- STATUS ---
export const getUsersStatus: Selector<StateType, LoadingStateEnum> = (state) =>
  getOtherUsersState(state).loading
export const getUserByIdStatus: Selector<StateType, LoadingStateEnum> = (state) =>
  getOtherUsersState(state).loadingItem