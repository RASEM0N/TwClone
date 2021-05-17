import { Selector } from 'reselect'
import { StateType } from '../store'
import { LoadingStateEnum, TweetType } from '../types'
import { InitialStateType } from './one-tweet-types'

// ------ ------ ------ ------ ------
export const getTweetState: Selector<StateType, InitialStateType> = (state) => state.tweet
export const getTweetItem: Selector<StateType, TweetType | null> = (state) =>
    getTweetState(state).item

// ------ ------ ------ ------ ------
export const getLoadingStateTweet: Selector<StateType, LoadingStateEnum> = (state) =>
    getTweetState(state).loading
