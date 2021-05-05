import produce, { Draft } from 'immer'
import { takeEvery, call, put, all, delay } from "redux-saga/effects";
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
export type ActionType = ISetTweetsAction | ISetTweetsLoadingState | IFetchTweetsAction
//#endregion

//#region ENUM
export enum LoadingStateEnum {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
}

enum TweetsTypeEnum {
    SET_TWEETS = `tweets/SET_TWEETS`,
    FETCH_TWEETS = `tweets/FETCH_TWEETS`,
    SET_LOADING_STATE = `tweets/SET_LOADING_STATE`,
}

//#endregion

//#region INITIAL STATE
const initialState = {
    items: [] as Array<TweetType>,
    loading: LoadingStateEnum.NEVER as LoadingStateEnum,
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
    }
}, initialState)
export default tweetsReducer
//#endregion

//#region ACTIONS
interface ISetTweetsAction extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_TWEETS
    payload: TweetType[]
}

export const setTweetsAction = (tweets: TweetType[]): ISetTweetsAction => ({
    type: TweetsTypeEnum.SET_TWEETS,
    payload: tweets,
})

interface IFetchTweetsAction extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.FETCH_TWEETS
}

export const fetchTweetsAction = (): IFetchTweetsAction => ({
    type: TweetsTypeEnum.FETCH_TWEETS,
})

interface ISetTweetsLoadingState extends Action<TweetsTypeEnum> {
    type: TweetsTypeEnum.SET_LOADING_STATE
    payload: LoadingStateEnum
}

export const setTweetsLoadingState = (state: LoadingStateEnum): ISetTweetsLoadingState => ({
    type: TweetsTypeEnum.SET_LOADING_STATE,
    payload: state,
})

//#endregion

//#region SAGAS
const fetchTweetsRequest = function* () {
    yield put(setTweetsLoadingState(LoadingStateEnum.LOADING))
    yield delay(2000)
    try {
        const data: TweetType[] = yield call(apiTweets.getTweets)
        yield put(setTweetsAction(data))
    } catch (error) {
        // console.log(error.message);
        yield put(setTweetsLoadingState(LoadingStateEnum.ERROR))
    }
}

const watchFetchTweets = function* () {
    yield takeEvery(TweetsTypeEnum.FETCH_TWEETS, fetchTweetsRequest)
}

export const TweetsSaga = function* () {
    yield all([watchFetchTweets()])
}

//#endregion

//#region SELECTORS
export const getTweets: Selector<StateType, InitialStateType> = (state) => state.tweet
export const getTweetsItems: Selector<StateType, TweetType[]> = (state) => getTweets(state).items
export const getLoadingStateTweets: Selector<StateType, LoadingStateEnum> = (state) =>
    getTweets(state).loading
//#endregion
