import { Selector } from 'reselect'
import { StateType } from '../store'
import { TweetType } from '../types'
import { InitialStateType, LoadingFormStateEnum, LoadingStateEnum } from './tweets-types'

export const getTweetsState: Selector<StateType, InitialStateType> = (state) => state.tweets
export const getTweetsItems: Selector<StateType, TweetType[]> = (state) =>
    getTweetsState(state).items
export const getLoadingStateTweets: Selector<StateType, LoadingStateEnum> = (state) =>
    getTweetsState(state).loading
export const getFormLoadingStateTweets: Selector<StateType, LoadingFormStateEnum> = (state) =>
    getTweetsState(state).loadingForm
