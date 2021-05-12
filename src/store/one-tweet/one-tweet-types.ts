import { Action } from 'redux'
import { LoadingStateEnum } from '../tweets/tweets-types'
import { TweetType } from '../types'
import { initialState } from './one-tweet-reducer'

export type InitialStateType = typeof initialState

export type ActionType = ISetTweetAction | IFetchTweetAction | ISetTweetLoadingState

// --- ENUM ---
export enum TweetActionEnum {
    SET_TWEET = 'one-tweet/SET_TWEET',
    FETCH_TWEET = 'one-tweet/FETCH_TWEET',
    SET_LOADING_STATE = 'one-tweet/SET_LOADING_STATE',
}

// --- ACTIONS ---
export interface ISetTweetAction extends Action<TweetActionEnum> {
    type: TweetActionEnum.SET_TWEET
    payload: TweetType
}

export interface IFetchTweetAction extends Action<TweetActionEnum> {
    type: TweetActionEnum.FETCH_TWEET
    payload: string
}

export interface ISetTweetLoadingState extends Action<TweetActionEnum> {
    type: TweetActionEnum.SET_LOADING_STATE
    payload: LoadingStateEnum
}
