import { InitialStateType, UserTypeEnum } from './otherUsers-types'
import { LoadingStateEnum, UserPublicType } from '../types'
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialStateType = {
    items: [],
    loading: LoadingStateEnum.NEVER,
    item: null,
    loadingItem: LoadingStateEnum.NEVER,
}

const otherUsers = createSlice({
    name: 'otherUsers',
    initialState: initialState,
    reducers: {
        // ------ ------ ------ ------ ------
        setUsers: (state, action: PayloadAction<UserPublicType[]>) => {
            state.items = action.payload
            state.loading = LoadingStateEnum.LOADED
        },
        setStatusUsers: (state, action: PayloadAction<LoadingStateEnum>) => {
            state.items = []
            state.loading = action.payload
        },
        // ------ ------ ------ ------ ------
        setUserById: (state, action: PayloadAction<UserPublicType>) => {
            state.item = action.payload
            state.loadingItem = LoadingStateEnum.LOADED
        },
        setStatusUserById: (state, action: PayloadAction<LoadingStateEnum>) => {
            state.item = null
            state.loadingItem = action.payload
        },
    },
})

export const fetchUsersAction = createAction<void, UserTypeEnum.FETCH_USERS>(
    UserTypeEnum.FETCH_USERS
)

export const fetchUserByIdAction = createAction<string, UserTypeEnum.FETCH_USER_BY_ID>(
    UserTypeEnum.FETCH_USER_BY_ID
)

export default otherUsers.reducer
export const { setUsers, setStatusUsers, setStatusUserById, setUserById } = otherUsers.actions
