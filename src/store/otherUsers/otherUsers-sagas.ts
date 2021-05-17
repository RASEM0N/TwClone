import { all, call, delay, put, takeLatest } from 'redux-saga/effects'

import { LoadingStateEnum, UserPublicType } from '../types'
import { IFetchUserById, UserTypeEnum } from './otherUsers-types'

import { apiUsers } from '../../services/api/APIUsers'
import { getAllUserResponseUserType, getUserByIdResponseUserType } from '../../services/api/types'
import { setStatusUserById, setStatusUsers, setUserById, setUsers } from './otherUsers-reducer'

// ------ ------ ------ ------ ------
const fetchUsersRequest = function* () {
    yield put(setStatusUsers(LoadingStateEnum.LOADING))
    try {
        yield delay(1000)
        const response: getAllUserResponseUserType = yield call(apiUsers.getAll)
        const users = response.data as UserPublicType[]
        yield put(setUsers(users))
    } catch (error) {
        yield put(setStatusUsers(LoadingStateEnum.ERROR))
    }
}
const watchFetchUsers = function* () {
    yield takeLatest(UserTypeEnum.FETCH_USERS, fetchUsersRequest)
}

// ------ ------ ------ ------ ------
const fetchUserByIdRequest = function* ({ payload }: IFetchUserById) {
    yield put(setStatusUserById(LoadingStateEnum.LOADING))
    try {
        const response: getUserByIdResponseUserType = yield call(apiUsers.getById, payload)
        const user = response.data as UserPublicType
        yield put(setUserById(user))
    } catch (e) {
        yield put(setStatusUserById(LoadingStateEnum.ERROR))
    }
}
const watchFetchUserById = function* () {
    yield takeLatest(UserTypeEnum.FETCH_USER_BY_ID, fetchUserByIdRequest)
}

export const OtherUsersSaga = function* () {
    yield all([watchFetchUsers(), watchFetchUserById()])
}
