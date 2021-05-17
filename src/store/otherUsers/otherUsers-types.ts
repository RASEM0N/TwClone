import { InitialStateForManyType, LoadingStateEnum, UserPublicType } from '../types'
import { Action } from 'redux'

export interface InitialStateType
    extends InitialStateForManyType<UserPublicType[], LoadingStateEnum> {
    item: UserPublicType | null
    loadingItem: LoadingStateEnum
}

// --- ENUM ---
export enum UserTypeEnum {
    FETCH_USERS = `other_users/FETCH_GET_USERS`,
    FETCH_USER_BY_ID = `other_users/FETCH_GET_USER_BY_ID `,
}

export interface IFetchUsers extends Action<UserTypeEnum> {
    type: UserTypeEnum.FETCH_USERS
}

export interface IFetchUserById extends Action<UserTypeEnum> {
    type: UserTypeEnum.FETCH_USER_BY_ID
    payload: string
}
