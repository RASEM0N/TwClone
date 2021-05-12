import { LoadingStateEnum, TweetType } from '../types'
import {
    IFetchTweetAction,
    ISetTweetAction,
    ISetTweetLoadingState,
    TweetActionEnum,
} from './one-tweet-types'

export const setTweetAction = (tweet: TweetType): ISetTweetAction => ({
    type: TweetActionEnum.SET_TWEET,
    payload: tweet,
})

export const fetchTweetAction = (id: string): IFetchTweetAction => ({
    type: TweetActionEnum.FETCH_TWEET,
    payload: id,
})
export const setTweetLoadingState = (state: LoadingStateEnum): ISetTweetLoadingState => ({
    type: TweetActionEnum.SET_LOADING_STATE,
    payload: state,
})
