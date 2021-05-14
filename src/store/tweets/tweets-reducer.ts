import produce, { Draft } from 'immer'
import { LoadingFormStateEnum, LoadingStateEnum } from '../types'
import { ActionType, InitialStateType, TweetsTypeEnum } from './tweets-types'

// --- INITIAL STATE ---
const initialState: InitialStateType = {
    items: [],
    loading: LoadingStateEnum.NEVER,
    loadingForm: LoadingFormStateEnum.NEVER,
    loadingDelete: LoadingStateEnum.NEVER,
}

// --- REDUCER ---
const tweetsReducer = produce((draft: Draft<InitialStateType>, action: ActionType) => {
    switch (action.type) {
        // get
        case TweetsTypeEnum.SET_TWEETS: {
            draft.items = action.payload
            draft.loading = LoadingStateEnum.LOADED
            break
        }
        case TweetsTypeEnum.SET_LOADING_STATE: {
            draft.items = []
            draft.loading = action.payload
            break
        }

        // create
        case TweetsTypeEnum.ADD_TWEET: {
            draft.items.unshift(action.payload)
            draft.loadingForm = LoadingFormStateEnum.NEVER
            break
        }
        case TweetsTypeEnum.SET_LOADING_FORM_STATE: {
            draft.loadingForm = action.payload
            break
        }
        case TweetsTypeEnum.FETCH_ADD_TWEET: {
            draft.loadingForm = LoadingFormStateEnum.LOADING
            break
        }

        // delete
        case TweetsTypeEnum.DELETE_TWEET: {
            draft.loadingDelete = LoadingStateEnum.LOADED
            draft.items.forEach((tweet, idx) => {
                if (tweet._id === action.payload) {
                    draft.items.splice(idx, 1)
                }
            })
            break
        }
        case TweetsTypeEnum.STATUS_DELETE_TWEET: {
            draft.loadingDelete = action.payload
        }
    }
}, initialState)
export default tweetsReducer
