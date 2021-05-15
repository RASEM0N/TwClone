import produce, { Draft } from 'immer'
import { ActionType, InitialStateType, UserTypeEnum } from './otherUsers-types'
import { LoadingStateEnum } from '../types'

// --- INITIAL STATE ---
const initialState: InitialStateType = {
    items: [],
    loading: LoadingStateEnum.NEVER,
    item: null,
    loadingItem: LoadingStateEnum.NEVER,
}

// --- REDUCER ---
const otherUsersReducer = produce((draft: Draft<InitialStateType>, action: ActionType) => {
    switch (action.type) {
        case UserTypeEnum.SET_USERS: {
            draft.items = action.payload
            draft.loading = LoadingStateEnum.LOADED
            break
        }
        case UserTypeEnum.STATUS_LOADING_USERS: {
            draft.items = []
            draft.loading = action.payload
            break
        }

        case UserTypeEnum.SET_USER_BY_ID: {
            draft.item = action.payload
            draft.loadingItem = LoadingStateEnum.LOADED
            break
        }

        case UserTypeEnum.STATUS_LOADING_USER_BY_ID: {
            draft.item = null
            draft.loadingItem = action.payload
        }
    }
}, initialState)

export default otherUsersReducer
