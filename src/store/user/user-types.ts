import { InitialStateForOneType, LoadingStateEnum, UserPrivateType } from '../types'
import { Action } from 'redux'
import { LoginRequestDataType } from '../../services/api/types'

export interface InitialStateType
    extends InitialStateForOneType<UserPrivateType | null, LoadingStateEnum> {
    token: string | null
}

export type ActionType = ISetUser | IFetchUser | IStatusUser | IBackFetchUser

// --- ENUM ---
export enum UserTypeEnum {
    SET_USER = 'user/SET_USER',
    FETCH_USER = `user/FETCH_GET_USER`,
    BACK_FETCH_USER = `user/BACK_FETCH_USER`,
    STATUS_LOADING_USER = `user/STATUS_LOADING_USER`,
}

// --- ACTION ---
//get
export interface ISetUser extends Action<UserTypeEnum> {
    type: UserTypeEnum.SET_USER
    payload: { user: UserPrivateType; token: string }
}

export interface IFetchUser extends Action<UserTypeEnum> {
    type: UserTypeEnum.FETCH_USER
    payload: LoginRequestDataType
}
export interface IBackFetchUser extends Action<UserTypeEnum> {
    type: UserTypeEnum.BACK_FETCH_USER
}

export interface IStatusUser extends Action<UserTypeEnum> {
    type: UserTypeEnum.STATUS_LOADING_USER
    payload: LoadingStateEnum
}
