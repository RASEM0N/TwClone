// --- TYPE ---
import { Action } from 'redux'
import {
    InitialStateForManyType,
    LoadingFormStateEnum,
    LoadingStateEnum,
    TweetType,
} from '../types'
import { TweetRequestDataType } from '../../services/api/types'

export interface InitialStateType extends InitialStateForManyType<TweetType[], LoadingStateEnum> {
    loadingForm: LoadingFormStateEnum
    loadingDelete: LoadingStateEnum
}

export type ActionType =
    // get
    | ISetTweetsAction
    | ISetTweetsLoadingState
    | IFetchTweetsAction
    // add
    | IAddTweet
    | IFetchAddTweet
    | ISetFormTweetLoadingState
    // delete
    | IFetchDeleteTweet
    | IDeleteTweet
    | IDeleteTweetStatus

// --- ENUM ---
export enum TweetsTypeEnum {
    SET_TWEETS = `tweets/SET_TWEETS`,
    FETCH_TWEETS = `tweets/FETCH_GET_TWEETS`,
    SET_LOADING_STATE = `tweets/STATUS_GET_TWEETS`,

    ADD_TWEET = 'tweets/CREATE_TWEET',
    FETCH_ADD_TWEET = 'tweets/FETCH_CREATE_TWEET',
    SET_LOADING_FORM_STATE = 'tweets/STATUS_CREATE_TWEET',

    DELETE_TWEET = 'tweets/DELETE_TWEET',
    FETCH_DELETE_TWEET = 'tweets/FETCH_DELETE_TWEET',
    STATUS_DELETE_TWEET = 'tweets/STATUS_DELETE_TWEET',
}

// --- ACTIONS ---
/**
 * action for state
 * action for fetch
 * action for status
 */

// get
export interface ISetTweetsAction extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_TWEETS
    payload: TweetType[]
}

export interface IFetchTweetsAction extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.FETCH_TWEETS
}

export interface ISetTweetsLoadingState extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_LOADING_STATE
    payload: LoadingStateEnum
}

// create
export interface IAddTweet extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.ADD_TWEET
    payload: TweetType
}

export interface IFetchAddTweet extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.FETCH_ADD_TWEET
    payload: TweetRequestDataType
}

export interface ISetFormTweetLoadingState extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_LOADING_FORM_STATE
    payload: LoadingFormStateEnum
}

// delete
export interface IDeleteTweet extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.DELETE_TWEET
    payload: string
}

export interface IFetchDeleteTweet extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.FETCH_DELETE_TWEET
    payload: string
}

export interface IDeleteTweetStatus extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.STATUS_DELETE_TWEET
    payload: LoadingStateEnum
}
