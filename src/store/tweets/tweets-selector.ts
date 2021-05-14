import { Selector } from 'reselect'
import { StateType } from '../store'
import { LoadingFormStateEnum, LoadingStateEnum, TweetType } from '../types'
import { InitialStateType } from './tweets-types'

// --- ITEMS ---
// state
export const getTweetsState: Selector<StateType, InitialStateType> = (state) => state.tweets
// tweets
export const getTweetsItems: Selector<StateType, TweetType[]> = (state) =>
    getTweetsState(state).items
// id to delete
export const getIdTweetToDelete: Selector<StateType, string | null> = (state) =>
    getTweetsState(state).idToDelete

// --- STATUS ---
// get
export const getLoadingStateTweets: Selector<StateType, LoadingStateEnum> = (state) =>
    getTweetsState(state).loading
// create
export const getFormLoadingStateTweets: Selector<StateType, LoadingFormStateEnum> = (state) =>
    getTweetsState(state).loadingForm
// delete
export const getStatusDeleteTweet: Selector<StateType, LoadingStateEnum> = (state) =>
    getTweetsState(state).loadingDelete
