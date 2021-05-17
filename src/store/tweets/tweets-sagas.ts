import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { IFetchAddTweet, IFetchDeleteTweet, TweetsTypeEnum } from "./tweets-types";
import { OneTweetResponseType, TweetsResponseType, uploadImageResponseType } from "../../services/api/types";
import { apiTweets } from "../../services/api/APITweets";

import { LoadingFormStateEnum, LoadingStateEnum, TweetType } from "../types";
import { uploadImage } from "../../utils/uploadImage";
import {
    addTweet,
    deleteTweet,
    setStatusDeleteOneTweet,
    setStatusLoadingOneTweet,
    setStatusLoadingTweets,
    setTweets
} from "./tweets-reducer";

// ------ ------ ------ ------ ------
const fetchTweetsRequest = function* () {
    yield put(setStatusLoadingTweets(LoadingStateEnum.LOADING))
    try {
        const response: TweetsResponseType = yield call(apiTweets.get)
        const tweets = response.data as TweetType[]
        yield put(setTweets(tweets))
    } catch (error) {
        yield put(setStatusLoadingTweets(LoadingStateEnum.ERROR))
    }
}
const watchFetchTweets = function* () {
    yield takeLatest(TweetsTypeEnum.FETCH_TWEETS, fetchTweetsRequest)
}

// ------ ------ ------ ------ ------
const addTweetRequest = function* ({ payload }: IFetchAddTweet) {
    yield put(setStatusLoadingOneTweet(LoadingFormStateEnum.LOADING))
    try {
        let imgResponse: uploadImageResponseType
        if (payload.file) {
            imgResponse = yield call(uploadImage, payload.file)
            payload.photoUrl = imgResponse.data?.photoUrl
        }
        const response: OneTweetResponseType = yield call(apiTweets.create, payload)
        const tweet = response.data as TweetType
        yield put(addTweet(tweet))
    } catch (e) {
        yield put(setStatusLoadingOneTweet(LoadingFormStateEnum.ERROR))
    }
}
const watchFetchAddTweet = function* () {
    yield takeLatest(TweetsTypeEnum.FETCH_ADD_TWEET, addTweetRequest)
}

// ------ ------ ------ ------ ------
const deleteTweetRequest = function* ({ payload }: IFetchDeleteTweet) {
    yield put(
        setStatusDeleteOneTweet({
            status: LoadingStateEnum.LOADING,
            id: payload,
        })
    )
    try {
        yield delay(1000)
        yield call(apiTweets.delete, payload)
        yield put(deleteTweet(payload))
    } catch (e) {
        yield put(setStatusDeleteOneTweet({
            status: LoadingStateEnum.ERROR,
            id: null
        }))
    }
}
const watchFetchDeleteTweet = function* () {
    yield takeLatest(TweetsTypeEnum.FETCH_DELETE_TWEET, deleteTweetRequest)
}

// ------ ------ ------ ------ ------
export const TweetsSaga = function* () {
    yield all([watchFetchTweets(), watchFetchAddTweet(), watchFetchDeleteTweet()])
}
