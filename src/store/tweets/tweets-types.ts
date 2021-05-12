// --- TYPE ---
import { Action } from 'redux'
import { TweetType } from '../types'
import { initialState } from './tweets-reducer'

export type InitialStateType = typeof initialState
export type ActionType =
    | ISetTweetsAction
    | ISetTweetsLoadingState
    | IFetchTweetsAction
    | IAddTweet
    | IFetchAddTweet
    | ISetFormTweetLoadingState

// --- ENUM ---
export enum LoadingStateEnum {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
}

export enum LoadingFormStateEnum {
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
}

export enum TweetsTypeEnum {
    SET_TWEETS = `tweets/SET_TWEETS`,
    FETCH_TWEETS = `tweets/FETCH_TWEETS`,
    SET_LOADING_STATE = `tweets/SET_LOADING_STATE`,

    ADD_TWEET = 'tweets/ADD_TWEET',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    SET_LOADING_FORM_STATE = 'tweets/SET_LOADING_FORM_STATE',
}

// --- ACTIONS ---
export interface ISetTweetsAction extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_TWEETS
    payload: TweetType[]
}

export interface IAddTweet extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.ADD_TWEET
    payload: TweetType
}

export interface IFetchAddTweet extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.FETCH_ADD_TWEET
    payload: string
}

export interface IFetchTweetsAction extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.FETCH_TWEETS
}

export interface ISetTweetsLoadingState extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_LOADING_STATE
    payload: LoadingStateEnum
}

export interface ISetFormTweetLoadingState extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_LOADING_FORM_STATE
    payload: LoadingFormStateEnum
}
