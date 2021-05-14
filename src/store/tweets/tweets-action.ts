import { LoadingFormStateEnum, LoadingStateEnum, TweetType } from '../types'
import {
    IAddTweet,
    IDeleteTweet,
    IDeleteTweetStatus,
    IFetchAddTweet,
    IFetchDeleteTweet,
    IFetchTweetsAction,
    ISetFormTweetLoadingState,
    ISetTweetsAction,
    ISetTweetsLoadingState,
    TweetsTypeEnum,
} from './tweets-types'
import { TweetRequestDataType } from '../../services/api/types'

// --- GET ---
export const setTweetsAction = (tweets: TweetType[]): ISetTweetsAction => ({
    type: TweetsTypeEnum.SET_TWEETS,
    payload: tweets,
})
export const fetchTweetsAction = (): IFetchTweetsAction => ({
    type: TweetsTypeEnum.FETCH_TWEETS,
})
export const setTweetsLoadingState = (state: LoadingStateEnum): ISetTweetsLoadingState => ({
    type: TweetsTypeEnum.SET_LOADING_STATE,
    payload: state,
})

// --- ADD ---
export const addTweetAction = (tweet: TweetType): IAddTweet => ({
    type: TweetsTypeEnum.ADD_TWEET,
    payload: tweet,
})
export const fetchAddTweetAction = (data: TweetRequestDataType): IFetchAddTweet => ({
    type: TweetsTypeEnum.FETCH_ADD_TWEET,
    payload: data,
})
export const setFormTweetLoadingState = (
    state: LoadingFormStateEnum
): ISetFormTweetLoadingState => ({
    type: TweetsTypeEnum.SET_LOADING_FORM_STATE,
    payload: state,
})

// --- DELETE ---
export const deleteTweetAction = (id: string): IDeleteTweet => ({
    type: TweetsTypeEnum.DELETE_TWEET,
    payload: id,
})
export const fetchDeleteTweetAction = (id: string): IFetchDeleteTweet => ({
    type: TweetsTypeEnum.FETCH_DELETE_TWEET,
    payload: id,
})
export const statusDeleteTweetAction = (status: LoadingStateEnum): IDeleteTweetStatus => ({
    type: TweetsTypeEnum.STATUS_DELETE_TWEET,
    payload: status,
})
