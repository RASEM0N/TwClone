import produce, { Draft } from 'immer'
import { LoadingStateEnum } from '../types'
import { ActionType, InitialStateType, TweetActionEnum } from './one-tweet-types'

// --- INITIAL STATE ---
export const initialState: InitialStateType = {
    item: null,
    loading: LoadingStateEnum.NEVER,
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
