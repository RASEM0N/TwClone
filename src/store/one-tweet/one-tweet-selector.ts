import { Selector } from 'reselect'
import { StateType } from '../store'
import { LoadingStateEnum } from '../tweets/tweets-types'
import { TweetType } from '../types'
import { InitialStateType } from './one-tweet-types'

export const getTweetState: Selector<StateType, InitialStateType> = (state) => state.tweet
export const getTweetItem: Selector<StateType, TweetType> = (state) =>
    getTweetState(state).item as TweetType
export const getLoadingStateTweet: Selector<StateType, LoadingStateEnum> = (state) =>
    getTweetState(state).loading
