import { LoadingStateEnum, TweetType } from '../types'
import { InitialStateType, TweetActionEnum } from './one-tweet-types'
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

// ------ ------ ------ ------ ------
export const initialState: InitialStateType = {
    item: null,
    loading: LoadingStateEnum.NEVER,
}

// ------ ------ ------ ------ ------
const tweet = createSlice({
    name: 'one_tweet',
    initialState: initialState,
    reducers: {
        setTweet: (state, action: PayloadAction<TweetType>) => {
            state.item = action.payload
            state.loading = LoadingStateEnum.LOADED
        },
        setStatusTweet: (state, action: PayloadAction<LoadingStateEnum>) => {
            state.item = null
            state.loading = action.payload
        },
    },
})

// ------ ------ ------ ------ ------
export const fetchTweetAction = createAction<string, TweetActionEnum.FETCH_TWEET>(
    TweetActionEnum.FETCH_TWEET
)

export default tweet.reducer
export const { setTweet, setStatusTweet } = tweet.actions
