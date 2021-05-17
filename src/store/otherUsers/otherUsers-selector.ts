import { Selector } from 'reselect'
import { StateType } from '../store'
import { LoadingStateEnum, UserPublicType } from '../types'
import { InitialStateType } from './otherUsers-types'

// ------ ------ ------ ------ ------
export const getOtherUsersState: Selector<StateType, InitialStateType> = (state) => state.otherUsers
export const getUsers: Selector<StateType, UserPublicType[]> = (state) =>
    getOtherUsersState(state).items
export const getUserById: Selector<StateType, UserPublicType | null> = (state) =>
    getOtherUsersState(state).item

// ------ ------ ------ ------ ------
export const getUsersStatus: Selector<StateType, LoadingStateEnum> = (state) =>
    getOtherUsersState(state).loading
export const getUserByIdStatus: Selector<StateType, LoadingStateEnum> = (state) =>
    getOtherUsersState(state).loadingItem