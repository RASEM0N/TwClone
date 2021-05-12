import { LoadingStateEnum } from './tweets'
import { Action } from 'redux'
import produce, { Draft } from 'immer'
import { all, call, put, takeEvery, delay } from 'redux-saga/effects'
import { apiTags } from '../../services/api/api'
import { Selector } from 'reselect'
import { StateType } from '../store'

//#region TYPE
export type TagType = {
    _id: string
    name: string
    count: string
}
export type InitialStateType = typeof initialState
export type ActionType = ISetTagsAction | IFetchTagsAction | ISetTagsLoadingStateAction
//#endregion

//#region ENUM
export enum TagsActionEnum {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

//#endregion

//#region InitialState
const initialState = {
    items: [] as TagType[],
    loading: LoadingStateEnum.NEVER as LoadingStateEnum,
}
//#endregion

//#region REDUCER
const tagsReducer = produce((draft: Draft<InitialStateType>, action: ActionType) => {
    switch (action.type) {
        case TagsActionEnum.SET_TAGS: {
            draft.items = action.payload
            draft.loading = LoadingStateEnum.LOADED
            break
        }
        case TagsActionEnum.SET_LOADING_STATE: {
            draft.items = []
            draft.loading = action.payload
            break
        }
    }
}, initialState)
export default tagsReducer
//#endregion

//#region ACTIONS
interface ISetTagsAction extends Action<TagsActionEnum> {
    type: TagsActionEnum.SET_TAGS
    payload: TagType[]
}

interface ISetTagsLoadingStateAction extends Action<TagsActionEnum> {
    type: TagsActionEnum.SET_LOADING_STATE
    payload: LoadingStateEnum
}

interface IFetchTagsAction extends Action<TagsActionEnum> {
    type: TagsActionEnum.FETCH_TAGS
}

const setTagsAction = (tags: TagType[]): ISetTagsAction => ({
    type: TagsActionEnum.SET_TAGS,
    payload: tags,
})

export const fetchTagsAction = (): IFetchTagsAction => ({
    type: TagsActionEnum.FETCH_TAGS,
})

const setTagsLoadingStateAction = (state: LoadingStateEnum): ISetTagsLoadingStateAction => ({
    type: TagsActionEnum.SET_LOADING_STATE,
    payload: state,
})

//#endregion

//#region SAGAS
const fetchTags = function* () {
    yield put(setTagsLoadingStateAction(LoadingStateEnum.LOADING))
    try {
        // yield delay(5000)
        const data: TagType[] = yield call(apiTags.getTags)
        yield put(setTagsAction(data))
    } catch (e) {
        yield put(setTagsLoadingStateAction(LoadingStateEnum.ERROR))
    }
}

const watchFetchTags = function* () {
    yield takeEvery(TagsActionEnum.FETCH_TAGS, fetchTags)
}

export const TagsSaga = function* () {
    yield all([watchFetchTags()])
}

//#endregion

//#region SELECTORS
export const getTags: Selector<StateType, InitialStateType> = (state) => state.tags
export const getTagsItems: Selector<StateType, TagType[]> = (state) => getTags(state).items
export const getLoadingStateTags: Selector<StateType, LoadingStateEnum> = (state) =>
    getTags(state).loading
//#endregion
