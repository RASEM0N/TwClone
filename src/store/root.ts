import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import tweetsReducer, { TweetsSaga } from './bundles/tweets'
import tagsReducer, { TagsSaga } from './bundles/tags'

/* --- BIG REDUCER --- */
export const rootReducer = combineReducers({
    tweet: tweetsReducer,
    tags: tagsReducer
})

/* --- BIG SAGA --- */
export const rootSaga = function* () {
    yield all([
        TweetsSaga(),
        TagsSaga()
    ])
}
