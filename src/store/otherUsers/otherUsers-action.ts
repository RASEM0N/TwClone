import {
    IFetchUserById,
    IFetchUsers,
    ISetUserById,
    ISetUsers, IStatusLoadingByUserId,
    IStatusLoadingUsers,
    UserTypeEnum
} from "./otherUsers-types";
import { LoadingStateEnum, UserPublicType } from '../types'

// get all
export const setUsersAction = (users: UserPublicType[]): ISetUsers => ({
    type: UserTypeEnum.SET_USERS,
    payload: users,
})

export const fetchUsersAction = (): IFetchUsers => ({
    type: UserTypeEnum.FETCH_USERS,
})

export const statusLoadingUsersAction = (status: LoadingStateEnum): IStatusLoadingUsers => ({
    type: UserTypeEnum.STATUS_LOADING_USERS,
    payload: status,
})

// get by id
export const setUserByIdAction = (user: UserPublicType): ISetUserById => ({
    type: UserTypeEnum.SET_USER_BY_ID,
    payload: user,
})

export const fetchUserByIdAction = (id: string): IFetchUserById => ({
    type: UserTypeEnum.FETCH_USER_BY_ID,
    payload: id,
})

export const statusLoadingUserByIdAction = (status: LoadingStateEnum): IStatusLoadingByUserId => ({
    type: UserTypeEnum.STATUS_LOADING_USER_BY_ID,
    payload: status,
})
