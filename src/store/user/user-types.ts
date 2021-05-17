import { InitialStateForOneType, LoadingStateEnum, UserPrivateType } from '../types'
import { Action } from 'redux'
import { LoginRequestDataType, RegisterRequestDataType } from "../../services/api/types";

export interface InitialStateType
    extends InitialStateForOneType<UserPrivateType | null, LoadingStateEnum> {
    token: string | null
    error: any
}

// ------ ------ ------ ------ ------
export enum UserTypeEnum {
    FETCH_USER = `user/FETCH_GET_USER`,
    REGISTER_USER = `user/REGISTER_USER`,
    BACK_FETCH_USER = `user/BACK_FETCH_USER`,
}

// ------ ------ ------ ------ ------
export interface IFetchUser extends Action<UserTypeEnum> {
    type: UserTypeEnum.FETCH_USER
    payload: LoginRequestDataType
}
export interface IRegisterUser extends Action<UserTypeEnum> {
    type: UserTypeEnum.REGISTER_USER
    payload: RegisterRequestDataType
}

