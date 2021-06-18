import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import { LoadingStateEnum, UserPrivateType } from '../types'
import { IFetchUser, IRegisterUser, UserTypeEnum } from './user-types'
import { apiAuth } from '../../services/api/APIAuthorization'
import { AuthorizationResponseUserType } from '../../services/api/types'
import { setStatusLoadingUser, setUser, setUserAuthorizeError } from './user-reducer'

// ------ ------ ------ ------ ------
export const fetchUserRequest = function* ({ payload }: IFetchUser) {
    yield put(setStatusLoadingUser(LoadingStateEnum.LOADING))
    try {
        const response: AuthorizationResponseUserType = yield call(apiAuth.login, payload)
        window.localStorage.setItem('token', `Bearer ${response.token}`)
        yield put(
            setUser({
                user: response.data as UserPrivateType,
                token: response.token as string,
            })
        )
    } catch (error) {
        window.localStorage.removeItem('token')
        yield put(setUserAuthorizeError(error.response?.data))
        yield put(setStatusLoadingUser(LoadingStateEnum.ERROR))
    }
}
const watchFetchUser = function* () {
    yield takeLatest(UserTypeEnum.FETCH_USER, fetchUserRequest)
}

// ------ ------ ------ ------ ------
export const backFetchUserRequest = function* () {
    yield put(setStatusLoadingUser(LoadingStateEnum.LOADING))
    try {
        yield delay(2000)
        const response: AuthorizationResponseUserType = yield call(apiAuth.getMe)
        window.localStorage.setItem('token', `Bearer ${response.token}`)
        yield put(
            setUser({
                user: response.data as UserPrivateType,
                token: response.token as string,
            })
        )
    } catch (error) {
        window.localStorage.removeItem('token')
        yield put(setStatusLoadingUser(LoadingStateEnum.ERROR))
    }
}
const watchBackFetchUser = function* () {
    yield takeLatest(UserTypeEnum.BACK_FETCH_USER, backFetchUserRequest)
}

// ------ ------ ------ ------ ------
const registerUserRequest = function* ({ payload }: IRegisterUser) {
    yield put(setStatusLoadingUser(LoadingStateEnum.LOADING))
    try {
        const response: AuthorizationResponseUserType = yield call(apiAuth.register, payload)
        window.localStorage.setItem('token', `Bearer ${response.token}`)
        yield put(
            setUser({
                user: response.data as UserPrivateType,
                token: response.token as string,
            })
        )
    } catch (error) {
        window.localStorage.removeItem('token')
        console.log(error.response)
        yield put(setUserAuthorizeError(error.response.data.message))
        yield put(setStatusLoadingUser(LoadingStateEnum.ERROR))
    }
}
const watchRegisterUser = function* () {
    yield takeLatest(UserTypeEnum.REGISTER_USER, registerUserRequest)
}

// ------ ------ ------ ------ ------
export const UserSaga = function* () {
    yield all([watchFetchUser(), watchBackFetchUser(), watchRegisterUser()])
}
