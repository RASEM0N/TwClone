import produce, { Draft } from 'immer'
import { TweetType } from '../types'
import {
    ActionType, InitialStateType,
    LoadingFormStateEnum,
    LoadingStateEnum,
    TweetsTypeEnum,
} from "./tweets-types";

// --- INITIAL STATE ---
export const initialState = {
    items: [] as Array<TweetType>,
    loading: LoadingStateEnum.NEVER as LoadingStateEnum,
    loadingForm: LoadingFormStateEnum.NEVER as LoadingFormStateEnum,
}

// --- REDUCER ---
const tweetsReducer = produce((draft: Draft<InitialStateType>, action: ActionType) => {
    switch (action.type) {
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

        case TweetsTypeEnum.ADD_TWEET: {
            draft.items.push(action.payload)
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
    }
}, initialState)
export default tweetsReducer

