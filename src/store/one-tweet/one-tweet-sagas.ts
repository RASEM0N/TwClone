import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import { LoadingStateEnum } from '../tweets/tweets-types'
import { apiTweets } from '../../services/api/APITweets'
import { IFetchTweetAction, TweetActionEnum } from './one-tweet-types'
import { setTweetAction, setTweetLoadingState } from './one-tweet-action'
import { TweetType } from '../types'
import { OneTweetResponseType } from '../../services/api/types'

// --- БЕРЕМ ТВИТ ПО ID ---
const fetchTweetById = function* ({ payload }: IFetchTweetAction) {
    yield put(setTweetLoadingState(LoadingStateEnum.LOADING))
    yield delay(500)
    try {
        const data: OneTweetResponseType = yield call(apiTweets.getTweetById, payload)
        const tweet = data.data as TweetType
        yield put(setTweetAction(tweet))
    } catch (e) {
        yield put(setTweetLoadingState(LoadingStateEnum.ERROR))
    }
}
const watchFetchTagById = function* () {
    yield takeLatest(TweetActionEnum.FETCH_TWEET, fetchTweetById)
}

export const TweetSaga = function* () {
    yield all([watchFetchTagById()])
}
