import { LoadingStateEnum } from "../tweets/tweets-types";
import {
    IFetchTagsAction,
    ISetTagsAction,
    ISetTagsLoadingStateAction,
    TagsActionEnum,
} from './tags-types'
import { TagType } from "../types";

export const setTagsAction = (tags: TagType[]): ISetTagsAction => ({
  type: TagsActionEnum.SET_TAGS,
  payload: tags,
})

export const fetchTagsAction = (): IFetchTagsAction => ({
  type: TagsActionEnum.FETCH_TAGS,
})

export const setTagsLoadingStateAction = (state: LoadingStateEnum): ISetTagsLoadingStateAction => ({
  type: TagsActionEnum.SET_LOADING_STATE,
  payload: state,
})