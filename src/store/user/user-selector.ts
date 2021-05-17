import { Selector } from 'reselect'
import { StateType } from '../store'
import { LoadingStateEnum, UserPrivateType } from '../types'
import { InitialStateType } from './user-types'

// ------ ------ ------ ------ ------
export const getUserState: Selector<StateType, InitialStateType> = (state) => state.user
export const getUser: Selector<StateType, UserPrivateType | null> = (state) =>
    getUserState(state).item

// ------ ------ ------ ------ ------
export const getUserStatus: Selector<StateType, LoadingStateEnum> = (state) =>
    getUserState(state).loading
