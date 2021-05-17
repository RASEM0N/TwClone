import { Action } from 'redux'
import { InitialStateForOneType, LoadingStateEnum, TweetType } from '../types'

export interface InitialStateType
    extends InitialStateForOneType<TweetType | null, LoadingStateEnum> {}

// ------ ------ ------ ------ ------
export enum TweetActionEnum {
    FETCH_TWEET = 'one-tweet/FETCH_TWEET',
}

// ------ ------ ------ ------ ------
export interface IFetchTweetAction extends Action<TweetActionEnum> {
    type: TweetActionEnum.FETCH_TWEET
    payload: string
}
