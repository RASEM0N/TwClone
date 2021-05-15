import { LoadingStateEnum } from '../types'
import produce, { Draft } from 'immer'
import { ActionType, InitialStateType, UserTypeEnum } from './user-types'

// --- INITIAL STATE ---
const initialState: InitialStateType = {
    item: null,
    loading: LoadingStateEnum.NEVER,
    token: null,
}

// --- REDUCER ---
const userReducer = produce((draft: Draft<InitialStateType>, action: ActionType) => {
    switch (action.type) {
        case UserTypeEnum.SET_USER: {
            draft.item = action.payload.user
            draft.token = action.payload.token
            draft.loading = LoadingStateEnum.LOADED
            break
        }
        case UserTypeEnum.STATUS_LOADING_USER: {
            draft.loading = action.payload
            draft.item = null
            draft.token = null
            break
        }

        case UserTypeEnum.LOGOUT: {
            draft.loading = LoadingStateEnum.NEVER
            localStorage.removeItem('token')
            draft.item = null
            draft.token = null
            break
        }
    }
}, initialState)

export default userReducer
