import { all, call, put, takeEvery } from 'redux-saga/effects'
import { apiTags } from '../../services/api/APITags'
import { setTagsAction, setTagsLoadingStateAction } from './tags-action'
import { LoadingStateEnum, TagType } from '../types'
import { TagsActionEnum } from './tags-types'
import { TagsResponseType } from '../../services/api/types'

const fetchTags = function* () {
    yield put(setTagsLoadingStateAction(LoadingStateEnum.LOADING))
    try {
        const response: TagsResponseType = yield call(apiTags.getTags)
        const tags = response.data as TagType[]
        yield put(setTagsAction(tags))
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
