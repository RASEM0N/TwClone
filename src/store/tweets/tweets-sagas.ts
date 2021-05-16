import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import { IFetchAddTweet, IFetchDeleteTweet, TweetsTypeEnum } from './tweets-types'
import {
    OneTweetResponseType,
    TweetsResponseType,
    uploadImageResponseType,
} from '../../services/api/types'
import { apiTweets } from '../../services/api/APITweets'
import {
    addTweetAction,
    deleteTweetAction,
    setFormTweetLoadingState,
    setTweetsAction,
    setTweetsLoadingState,
    statusDeleteTweetAction,
} from './tweets-action'
import { LoadingFormStateEnum, LoadingStateEnum, TweetType } from '../types'
import { uploadImage } from '../../utils/uploadImage'

// --- GET  ---
const fetchTweetsRequest = function* () {
    yield put(setTweetsLoadingState(LoadingStateEnum.LOADING))
    try {
        const response: TweetsResponseType = yield call(apiTweets.get)
        const tweets = response.data as TweetType[]
        yield put(setTweetsAction(tweets))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingStateEnum.ERROR))
    }
}
const watchFetchTweets = function* () {
    yield takeLatest(TweetsTypeEnum.FETCH_TWEETS, fetchTweetsRequest)
}

// --- CREATE ---
const addTweetRequest = function* ({ payload }: IFetchAddTweet) {
    yield put(setFormTweetLoadingState(LoadingFormStateEnum.LOADING))
    try {
        let imgResponse: uploadImageResponseType
        if (payload.file) {
            imgResponse = yield call(uploadImage, payload.file)
            payload.photoUrl = imgResponse.data?.photoUrl
        }
        const response: OneTweetResponseType = yield call(apiTweets.create, payload)
        const tweet = response.data as TweetType
        yield put(addTweetAction(tweet))
    } catch (e) {
        yield put(setFormTweetLoadingState(LoadingFormStateEnum.ERROR))
    }
}
const watchFetchAddTweet = function* () {
    yield takeLatest(TweetsTypeEnum.FETCH_ADD_TWEET, addTweetRequest)
}

// --- DELETE ---
const deleteTweetRequest = function* ({ payload }: IFetchDeleteTweet) {
    yield put(statusDeleteTweetAction(LoadingStateEnum.LOADING))
    try {
        yield delay(1000)
        yield call(apiTweets.delete, payload)
        yield put(deleteTweetAction(payload))
    } catch (e) {
        yield put(statusDeleteTweetAction(LoadingStateEnum.ERROR))
    }
}
const watchFetchDeleteTweet = function* () {
    yield takeLatest(TweetsTypeEnum.FETCH_DELETE_TWEET, deleteTweetRequest)
}
export const TweetsSaga = function* () {
    yield all([watchFetchTweets(), watchFetchAddTweet(), watchFetchDeleteTweet()])
}
