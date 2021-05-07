import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import tweetsReducer, { TweetsSaga } from './bundles/tweets'
import tagsReducer, { TagsSaga } from './bundles/tags'
import tweetReducer, { TweetSaga } from './bundles/one-tweet'

/* --- BIG REDUCER --- */
export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer
})

/* --- BIG SAGA --- */
export const rootSaga = function* () {
    yield all([
        TweetsSaga(),
        TagsSaga(),
        TweetSaga()
    ])
}
