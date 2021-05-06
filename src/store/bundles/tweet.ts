import produce, { Draft } from 'immer'
import { Action } from 'redux'
import { LoadingStateEnum, TweetType } from './tweets'
import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import { apiTweets } from '../../services/api/api'
import { Selector } from 'reselect'
import { StateType } from '../store'

//#region TYPE
type InitialStateType = typeof initialState
type ActionType = ISetTweetAction | IFetchTweetAction | ISetTweetLoadingState
//#endregion

//#region ENUM
enum TweetActionEnum {
    SET_TWEET = 'tweet/SET_TWEET',
    FETCH_TWEET = 'tweet/FETCH_TWEET',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

//#endregion

//#region INITIAL STATE
const initialState = {
    item: null as TweetType | null,
    loading: LoadingStateEnum.NEVER as LoadingStateEnum,
}
//#endregion

//#region REDUCER
const tweetReducer = produce((draft: Draft<InitialStateType>, action: ActionType) => {
    switch (action.type) {
        case TweetActionEnum.SET_TWEET: {
            draft.item = action.payload
            draft.loading = LoadingStateEnum.LOADED
            break
        }
        case TweetActionEnum.SET_LOADING_STATE: {
            draft.item = null
            draft.loading = action.payload
            break
        }
    }
}, initialState)
export default tweetReducer
//#endregion

//#region ACTION
interface ISetTweetAction extends Action<TweetActionEnum> {
    type: TweetActionEnum.SET_TWEET
    payload: TweetType
}

interface IFetchTweetAction extends Action<TweetActionEnum> {
    type: TweetActionEnum.FETCH_TWEET
    payload: string
}

interface ISetTweetLoadingState extends Action<TweetActionEnum> {
    type: TweetActionEnum.SET_LOADING_STATE
    payload: LoadingStateEnum
}

const setTweetAction = (tweet: TweetType): ISetTweetAction => ({
    type: TweetActionEnum.SET_TWEET,
    payload: tweet,
})

export const fetchTweetAction = (id: string): IFetchTweetAction => ({
    type: TweetActionEnum.FETCH_TWEET,
    payload: id,
})
const setTweetLoadingState = (state: LoadingStateEnum): ISetTweetLoadingState => ({
    type: TweetActionEnum.SET_LOADING_STATE,
    payload: state,
})

//#endregion

//#region SAGAS

const fetchTweetById = function* ({ payload }: IFetchTweetAction) {
    yield put(setTweetLoadingState(LoadingStateEnum.LOADING))
    yield delay(500)
    try {
        const data: TweetType[] = yield call(apiTweets.getTweetById, payload)
        yield put(setTweetAction(data[0]))
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
//endregion

//#region SELECTORS
export const getTweet: Selector<StateType, InitialStateType> = (state) => state.tweet
export const getTweetItem: Selector<StateType, TweetType> = (state) =>
    getTweet(state).item as TweetType
export const getLoadingStateTweet: Selector<StateType, LoadingStateEnum> = (state) =>
    getTweet(state).loading
//#endregion
