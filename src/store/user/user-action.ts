import {
    IBackFetchUser,
    IFetchUser,
    ILogout,
    ISetUser,
    IStatusUser,
    UserTypeEnum,
} from './user-types'
import { LoadingStateEnum, UserPrivateType } from '../types'
import { LoginRequestDataType } from '../../services/api/types'

// --- GET ---
export const setUserAction = (user: UserPrivateType, token: string): ISetUser => ({
    type: UserTypeEnum.SET_USER,
    payload: {
        user,
        token,
    },
})
export const fetchUserAction = (values: LoginRequestDataType): IFetchUser => ({
    type: UserTypeEnum.FETCH_USER,
    payload: values,
})
export const backFetchUserAction = (): IBackFetchUser => ({
    type: UserTypeEnum.BACK_FETCH_USER,
})
export const statusUserAction = (status: LoadingStateEnum): IStatusUser => ({
    type: UserTypeEnum.STATUS_LOADING_USER,
    payload: status,
})

export const logoutAction = (): ILogout => ({
    type: UserTypeEnum.LOGOUT,
})

// --- CREATE ---
