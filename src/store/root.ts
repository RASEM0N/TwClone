import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import tweetsReducer, { watchFetchTweets } from './bundles/tweets'

/* --- BIG REDUCER --- */
export const rootReducer = combineReducers({
    tweet: tweetsReducer,
})

/* --- BIG SAGA --- */
export const rootSaga = function* () {
    yield all([
        watchFetchTweets()
    ])
}
