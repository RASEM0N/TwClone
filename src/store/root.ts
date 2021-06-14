import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import tweetsReducer from './tweets/tweets-reducer'
import tagsReducer from './tags/tags-reducer'
import tweetReducer from './one-tweet/one-tweet-reducer'
import { TweetsSaga } from './tweets/tweets-sagas'
import { TweetSaga } from './one-tweet/one-tweet-sagas'
import { TagsSaga } from './tags/tags-sagas'
import userReducer from './user/user-reducer'
import { UserSaga } from './user/user-sagas'
import otherUsersReducer from './otherUsers/otherUsers-reducer'
import { OtherUsersSaga } from './otherUsers/otherUsers-sagas'

/* --- BIG REDUCER --- */
export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer,
    user: userReducer,
    otherUsers: otherUsersReducer,
})

/* --- BIG SAGA --- */
export const rootSaga = function* () {
    yield all([TweetsSaga(), TagsSaga(), TweetSaga(), UserSaga(), OtherUsersSaga()])
}
