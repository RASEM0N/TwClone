import { all, call, put, takeEvery } from 'redux-saga/effects'
import { LoadingStateEnum } from '../tweets/tweets-types'
import { apiTags } from '../../services/api/APITags'
import { setTagsAction, setTagsLoadingStateAction } from './tags-action'
import { TagType } from '../types'
import { TagsActionEnum } from './tags-types'

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
