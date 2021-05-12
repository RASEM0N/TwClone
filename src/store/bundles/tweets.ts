import produce, { Draft } from 'immer'
import { call, put, all, delay, takeLatest } from 'redux-saga/effects'
import { Action } from 'redux'
import { apiTweets } from '../../services/api/api'
import { StateType } from '../store'
import { Selector } from 'reselect'

//#region TYPE
export type TweetType = {
    _id: string
    text: string
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
}
type InitialStateType = typeof initialState
export type ActionType =
    | ISetTweetsAction
    | ISetTweetsLoadingState
    | IFetchTweetsAction
    | IAddTweet
    | IFetchAddTweet
    | ISetFormTweetLoadingState
//#endregion

//#region ENUM
export enum LoadingStateEnum {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
}

export enum LoadingFormStateEnum {
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
}

enum TweetsTypeEnum {
    // берем кучу твитов
    SET_TWEETS = `tweets/SET_TWEETS`,
    FETCH_TWEETS = `tweets/FETCH_TWEETS`,
    SET_LOADING_STATE = `tweets/SET_LOADING_STATE`,

    // эту у формы добавления твита
    // добавляем (пушим) твит также и в стор
    ADD_TWEET = 'tweets/ADD_TWEET',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    SET_LOADING_FORM_STATE = 'tweets/SET_LOADING_FORM_STATE',
}

//#endregion

//#region INITIAL STATE
const initialState = {
    items: [] as Array<TweetType>,
    loading: LoadingStateEnum.NEVER as LoadingStateEnum,
    loadingForm: LoadingFormStateEnum.NEVER as LoadingFormStateEnum,
}
//#endregion

//#region REDUCER
const tweetsReducer = produce((draft: Draft<InitialStateType>, action: ActionType) => {
    switch (action.type) {
        case TweetsTypeEnum.SET_TWEETS: {
            draft.items = action.payload
            draft.loading = LoadingStateEnum.LOADED
            break
        }
        case TweetsTypeEnum.SET_LOADING_STATE: {
            draft.items = []
            draft.loading = action.payload
            break
        }

        case TweetsTypeEnum.ADD_TWEET: {
            draft.items.push(action.payload)
            draft.loadingForm = LoadingFormStateEnum.NEVER
            break
        }
        case TweetsTypeEnum.SET_LOADING_FORM_STATE: {
            draft.loadingForm = action.payload
            break
        }
        case TweetsTypeEnum.FETCH_ADD_TWEET: {
            draft.loadingForm = LoadingFormStateEnum.LOADING
            break
        }
    }
}, initialState)
export default tweetsReducer
//#endregion

//#region ACTIONS
interface ISetTweetsAction extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_TWEETS
    payload: TweetType[]
}

interface IAddTweet extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.ADD_TWEET
    payload: TweetType
}

interface IFetchAddTweet extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.FETCH_ADD_TWEET
    payload: string
}

interface IFetchTweetsAction extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.FETCH_TWEETS
}

interface ISetTweetsLoadingState extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_LOADING_STATE
    payload: LoadingStateEnum
}

interface ISetFormTweetLoadingState extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_LOADING_FORM_STATE
    payload: LoadingFormStateEnum
}

export const fetchTweetsAction = (): IFetchTweetsAction => ({
    type: TweetsTypeEnum.FETCH_TWEETS,
})
export const fetchAddTweetAction = (text: string): IFetchAddTweet => ({
    type: TweetsTypeEnum.FETCH_ADD_TWEET,
    payload: text,
})

const setTweetsAction = (tweets: TweetType[]): ISetTweetsAction => ({
    type: TweetsTypeEnum.SET_TWEETS,
    payload: tweets,
})
const addTweetAction = (tweet: TweetType): IAddTweet => ({
    type: TweetsTypeEnum.ADD_TWEET,
    payload: tweet,
})

const setTweetsLoadingState = (state: LoadingStateEnum): ISetTweetsLoadingState => ({
    type: TweetsTypeEnum.SET_LOADING_STATE,
    payload: state,
})
const setFormTweetLoadingState = (state: LoadingFormStateEnum): ISetFormTweetLoadingState => ({
    type: TweetsTypeEnum.SET_LOADING_FORM_STATE,
    payload: state,
})

//#endregion

//#region SAGAS
const fetchTweetsRequest = function* () {
    yield put(setTweetsLoadingState(LoadingStateEnum.LOADING))
    try {
        yield delay(130000)
        const data: TweetType[] = yield call(apiTweets.getTweets)
        yield put(setTweetsAction(data))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingStateEnum.ERROR))
    }
}
const addTweetRequest = function* ({ payload }: IFetchAddTweet) {
    yield put(setFormTweetLoadingState(LoadingFormStateEnum.LOADING))
    try {
        const data: TweetType = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: 'Test',
                username: 'test',
                avatarUrl: 'https://source.unsplash.com/random/100x100?5',
            },
        }
        const response: TweetType = yield call(apiTweets.addTweet, data)
        yield put(addTweetAction(response))
    } catch (e) {
        yield put(setFormTweetLoadingState(LoadingFormStateEnum.ERROR))
    }
}

const watchFetchAddTweet = function* () {
    yield takeLatest(TweetsTypeEnum.FETCH_ADD_TWEET, addTweetRequest)
}
const watchFetchTweets = function* () {
    yield takeLatest(TweetsTypeEnum.FETCH_TWEETS, fetchTweetsRequest)
}

export const TweetsSaga = function* () {
    yield all([watchFetchTweets(), watchFetchAddTweet()])
}

//#endregion

//#region SELECTORS
export const getTweets: Selector<StateType, InitialStateType> = (state) => state.tweets
export const getTweetsItems: Selector<StateType, TweetType[]> = (state) => getTweets(state).items
export const getLoadingStateTweets: Selector<StateType, LoadingStateEnum> = (state) =>
    getTweets(state).loading
export const getFormLoadingStateTweets: Selector<StateType, LoadingFormStateEnum> = (state) =>
    getTweets(state).loadingForm
//#endregion
