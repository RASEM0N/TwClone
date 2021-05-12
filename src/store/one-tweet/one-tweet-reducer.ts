import produce, { Draft } from 'immer'
import { ActionType, InitialStateType, TweetActionEnum } from './one-tweet-types'
import { LoadingStateEnum } from '../tweets/tweets-types'
import { TweetType } from '../types'

// --- INITIAL STATE ---
export const initialState = {
    item: null as TweetType | null,
    loading: LoadingStateEnum.NEVER as LoadingStateEnum,
}

// --- REDUCER ---
const tweetReducer = produce((draft: Draft<InitialStateType>, action: ActionType) => {
    switch (action.type) {
        case TweetActionEnum.SET_TWEET: {
            draft.item = action.payload
            draft.loading = LoadingStateEnum.LOADED
            break
        }
        case TweetActionEnum.SET_LOADING_STATE: {
            draft.item = null
            draft.loading = action.payload
            break
        }
    }
}, initialState)
export default tweetReducer
