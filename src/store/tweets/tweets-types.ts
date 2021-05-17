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
    idToDelete: null | string
    filter: string
}

// ------ ------ ------ ------ ------
export enum TweetsTypeEnum {
    FETCH_TWEETS = `tweets/FETCH_GET_TWEETS`,
    FETCH_ADD_TWEET = 'tweets/FETCH_CREATE_TWEET',
    FETCH_DELETE_TWEET = 'tweets/FETCH_DELETE_TWEET',
}

// ------ ------ ------ ------ ------
export interface IFetchAddTweet extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.FETCH_ADD_TWEET
    payload: TweetRequestDataType
}
export interface IFetchDeleteTweet extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.FETCH_DELETE_TWEET
    payload: string
}
