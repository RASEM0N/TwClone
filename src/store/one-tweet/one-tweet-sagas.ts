import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import { apiTweets } from '../../services/api/APITweets'
import { IFetchTweetAction, TweetActionEnum } from './one-tweet-types'
import { LoadingStateEnum, TweetType } from '../types'
import { OneTweetResponseType } from '../../services/api/types'
import { setStatusTweet, setTweet } from './one-tweet-reducer'

// ------ ------ ------ ------ ------
const fetchTweetById = function* ({ payload }: IFetchTweetAction) {
    yield put(setStatusTweet(LoadingStateEnum.LOADING))
    yield delay(500)
    try {
        const response: OneTweetResponseType = yield call(apiTweets.getById, payload)
        const tweet = response.data as TweetType
        yield put(setTweet(tweet))
    } catch (e) {
        yield put(setStatusTweet(LoadingStateEnum.ERROR))
    }
}
const watchFetchTagById = function* () {
    yield takeLatest(TweetActionEnum.FETCH_TWEET, fetchTweetById)
}

// ------ ------ ------ ------ ------
export const TweetSaga = function* () {
    yield all([watchFetchTagById()])
}
