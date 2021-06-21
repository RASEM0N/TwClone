import { LoadingStateEnum, UserPrivateType } from '../types'
import { InitialStateType, UserTypeEnum } from './user-types'
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginRequestDataType, RegisterRequestDataType } from '../../services/api/types'

// ------ ------ ------ ------ ------
const initialState: InitialStateType = {
    item: null,
    loading: LoadingStateEnum.NEVER,
    token: null,
    error: null,
}

// ------ ------ ------ ------ ------
const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ user: UserPrivateType; token: string }>) => {
            state.item = action.payload.user
            state.token = action.payload.token
            state.loading = LoadingStateEnum.LOADED
        },
        setUserAuthorizeError: (state, action: PayloadAction<any>) => {
            state.loading = LoadingStateEnum.ERROR
            state.error = action.payload
        },
        setStatusLoadingUser: (state, action: PayloadAction<LoadingStateEnum>) => {
            state.loading = action.payload
            state.item = null
            state.token = null
        },
        logout: (state, action: PayloadAction<void>) => {
            state.loading = LoadingStateEnum.NEVER
            localStorage.removeItem('token')
            state.item = null
            state.token = null
        },
    },
})

// ------ ------ ------ ------ ------
export const fetchUserAction = createAction<LoginRequestDataType, UserTypeEnum>(
    UserTypeEnum.FETCH_USER
)
export const registerUserAction = createAction<RegisterRequestDataType, UserTypeEnum.REGISTER_USER>(
    UserTypeEnum.REGISTER_USER
)
export const backFetchUserAction = createAction<void, UserTypeEnum>(UserTypeEnum.BACK_FETCH_USER)

export default user.reducer
export const { setUser, setStatusLoadingUser, logout, setUserAuthorizeError } = user.actions
