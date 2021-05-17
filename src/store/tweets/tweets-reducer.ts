import { LoadingFormStateEnum, LoadingStateEnum, TweetType } from '../types'
import { InitialStateType, TweetsTypeEnum } from './tweets-types'
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TweetRequestDataType } from '../../services/api/types'

// --- INITIAL STATE ---
const initialState: InitialStateType = {
    items: [],
    loading: LoadingStateEnum.NEVER,
    loadingForm: LoadingFormStateEnum.NEVER,
    loadingDelete: LoadingStateEnum.LOADED,
    idToDelete: null,
}

//         case TweetsTypeEnum.FETCH_ADD_TWEET: {
//             state.loadingForm = LoadingFormStateEnum.LOADING
//             break

const tweet = createSlice({
    name: 'tweet',
    initialState: initialState,
    reducers: {
        // ------ ------ ------ ------ ------
        setTweets: (state, action: PayloadAction<TweetType[]>) => {
            state.items = action.payload
            state.loading = LoadingStateEnum.LOADED
        },
        setStatusLoadingTweets: (state, action: PayloadAction<LoadingStateEnum>) => {
            state.items = []
            state.loading = action.payload
        },
        // ------ ------ ------ ------ ------
        addTweet: (state, action: PayloadAction<TweetType>) => {
            state.items.unshift(action.payload)
            state.loadingForm = LoadingFormStateEnum.NEVER
        },
        setStatusLoadingOneTweet: (state, action: PayloadAction<LoadingFormStateEnum>) => {
            state.loadingForm = action.payload
        },
        // ------ ------ ------ ------ ------
        deleteTweet: (state, action: PayloadAction<string>) => {
            state.loadingDelete = LoadingStateEnum.LOADED
            state.items.forEach((tweet, idx) => {
                if (tweet._id === action.payload) {
                    state.items.splice(idx, 1)
                }
            })
        },
        setStatusDeleteOneTweet: (
            state,
            action: PayloadAction<{
                status: LoadingStateEnum
                id: string | null
            }>
        ) => {
            if (action.payload.status) {
                state.idToDelete = action.payload.id
            }
            state.loadingDelete = action.payload.status
        },
    },
})

export const fetchTweetsAction = createAction<void, TweetsTypeEnum.FETCH_TWEETS>(
    TweetsTypeEnum.FETCH_TWEETS
)
export const fetchAddTweetAction = createAction<
    TweetRequestDataType,
    TweetsTypeEnum.FETCH_ADD_TWEET
>(TweetsTypeEnum.FETCH_ADD_TWEET)

export const fetchDeleteTweetAction = createAction<string, TweetsTypeEnum.FETCH_DELETE_TWEET>(
    TweetsTypeEnum.FETCH_DELETE_TWEET
)

export default tweet.reducer
export const {
    setTweets,
    setStatusLoadingTweets,
    addTweet,
    setStatusLoadingOneTweet,
    deleteTweet,
    setStatusDeleteOneTweet,
} = tweet.actions
