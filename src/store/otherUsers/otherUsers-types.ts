import { InitialStateForManyType, LoadingStateEnum, UserPublicType } from '../types'
import { Action } from 'redux'

export interface InitialStateType
    extends InitialStateForManyType<UserPublicType[], LoadingStateEnum> {
    item: UserPublicType | null
    loadingItem: LoadingStateEnum
}

export type ActionType =
    | ISetUsers
    | IFetchUsers
    | IStatusLoadingUsers
    | ISetUserById
    | IFetchUserById
    | IStatusLoadingByUserId

// --- ENUM ---
export enum UserTypeEnum {
    SET_USERS = 'other_users/SET_USERS',
    FETCH_USERS = `other_users/FETCH_GET_USERS`,
    STATUS_LOADING_USERS = `other_users/STATUS_LOADING_USER`,

    SET_USER_BY_ID = 'other_users/SET_USER_BY_ID',
    FETCH_USER_BY_ID = `other_users/FETCH_GET_USER_BY_ID `,
    STATUS_LOADING_USER_BY_ID = `other_users/STATUS_USER_BY_ID `,
}

// --- ACTION ---
// get all
export interface ISetUsers extends Action<UserTypeEnum> {
    type: UserTypeEnum.SET_USERS
    payload: UserPublicType[]
}

export interface IFetchUsers extends Action<UserTypeEnum> {
    type: UserTypeEnum.FETCH_USERS
}

export interface IStatusLoadingUsers extends Action<UserTypeEnum> {
    type: UserTypeEnum.STATUS_LOADING_USERS
    payload: LoadingStateEnum
}

//get by id
export interface ISetUserById extends Action<UserTypeEnum> {
    type: UserTypeEnum.SET_USER_BY_ID
    payload: UserPublicType
}

export interface IFetchUserById extends Action<UserTypeEnum> {
    type: UserTypeEnum.FETCH_USER_BY_ID
    payload: string
}

export interface IStatusLoadingByUserId extends Action<UserTypeEnum> {
    type: UserTypeEnum.STATUS_LOADING_USER_BY_ID
    payload: LoadingStateEnum
}
