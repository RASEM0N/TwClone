import { LoadingFormStateEnum, LoadingStateEnum, TweetType } from '../types'
import {
    IAddTweet,
    IFetchAddTweet,
    IFetchTweetsAction,
    ISetFormTweetLoadingState,
    ISetTweetsAction,
    ISetTweetsLoadingState,
    TweetsTypeEnum,
} from './tweets-types'
import { TweetRequestDataType } from "../../services/api/types";

export const fetchTweetsAction = (): IFetchTweetsAction => ({
    type: TweetsTypeEnum.FETCH_TWEETS,
})
export const fetchAddTweetAction = (data: TweetRequestDataType): IFetchAddTweet => ({
    type: TweetsTypeEnum.FETCH_ADD_TWEET,
    payload: data,
})

export const setTweetsAction = (tweets: TweetType[]): ISetTweetsAction => ({
    type: TweetsTypeEnum.SET_TWEETS,
    payload: tweets,
})
export const addTweetAction = (tweet: TweetType): IAddTweet => ({
    type: TweetsTypeEnum.ADD_TWEET,
    payload: tweet,
})

export const setTweetsLoadingState = (state: LoadingStateEnum): ISetTweetsLoadingState => ({
    type: TweetsTypeEnum.SET_LOADING_STATE,
    payload: state,
})
export const setFormTweetLoadingState = (
    state: LoadingFormStateEnum
): ISetFormTweetLoadingState => ({
    type: TweetsTypeEnum.SET_LOADING_FORM_STATE,
    payload: state,
})
