import { Selector } from 'reselect'
import { StateType } from '../store'
import { LoadingStateEnum, UserPrivateType } from '../types'
import { InitialStateType } from './user-types'

// --- ITEMS ---
// state
export const getUserState: Selector<StateType, InitialStateType> = (state) => state.user
// tweets
export const getUser: Selector<StateType, UserPrivateType | null> = (state) =>
    getUserState(state).item

// --- STATUS ---
// get
export const getUserStatus: Selector<StateType, LoadingStateEnum> = (state) =>
    getUserState(state).loading
