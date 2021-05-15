import { all, call, delay, put, takeLatest } from 'redux-saga/effects'

import { LoadingFormStateEnum, LoadingStateEnum, TweetType, UserPublicType } from '../types'
import { IFetchUserById, UserTypeEnum } from './otherUsers-types'
import { setUserByIdAction, setUsersAction, statusLoadingUsersAction } from './otherUsers-action'
import { apiUsers } from '../../services/api/APIUsers'
import { getAllUserResponseUserType, getUserByIdResponseUserType } from '../../services/api/types'

// --- GET ALL  ---
const fetchUsersRequest = function* () {
    yield put(statusLoadingUsersAction(LoadingStateEnum.LOADING))
    try {
        yield delay(1000)
        const response: getAllUserResponseUserType = yield call(apiUsers.getAll)
        const users = response.data as UserPublicType[]
        yield put(setUsersAction(users))
    } catch (error) {
        yield put(statusLoadingUsersAction(LoadingStateEnum.ERROR))
    }
}
const watchFetchUsers = function* () {
    yield takeLatest(UserTypeEnum.FETCH_USERS, fetchUsersRequest)
}

// --- GET BY ID ---
const fetchUserByIdRequest = function* ({ payload }: IFetchUserById) {
    yield put(statusLoadingUsersAction(LoadingStateEnum.LOADING))
    try {
        const response: getUserByIdResponseUserType = yield call(apiUsers.getById, payload)
        const user = response.data as UserPublicType
        yield put(setUserByIdAction(user))
    } catch (e) {
        yield put(statusLoadingUsersAction(LoadingStateEnum.ERROR))
    }
}
const watchFetchUserById = function* () {
    yield takeLatest(UserTypeEnum.FETCH_USER_BY_ID, fetchUserByIdRequest)
}

export const OtherUsersSaga = function* () {
    yield all([watchFetchUsers(), watchFetchUserById()])
}
