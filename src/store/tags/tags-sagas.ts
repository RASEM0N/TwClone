import { all, call, put, takeEvery } from 'redux-saga/effects'
import { apiTags } from '../../services/api/APITags'
import { LoadingStateEnum, TagType } from '../types'
import { TagsActionEnum } from './tags-types'
import { TagsResponseType } from '../../services/api/types'
import { setStatusLoadingTags, setTags } from './tags-reducer'

// ------ ------ ------ ------ ------
const fetchTags = function* () {
    yield put(setStatusLoadingTags(LoadingStateEnum.LOADING))
    try {
        const response: TagsResponseType = yield call(apiTags.getTags)
        const tags = response.data as TagType[]
        yield put(setTags(tags))
    } catch (e) {
        yield put(setStatusLoadingTags(LoadingStateEnum.ERROR))
    }
}
const watchFetchTags = function* () {
    yield takeEvery(TagsActionEnum.FETCH_TAGS, fetchTags)
}

// ------ ------ ------ ------ ------
export const TagsSaga = function* () {
    yield all([watchFetchTags()])
}
