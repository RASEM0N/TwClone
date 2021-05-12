import { Action } from 'redux'
import { InitialStateForManyType, LoadingStateEnum, TagType } from '../types'

export interface InitialStateType extends InitialStateForManyType<TagType[], LoadingStateEnum> {}

export type ActionType = ISetTagsAction | IFetchTagsAction | ISetTagsLoadingStateAction

// --- ENUM ---
export enum TagsActionEnum {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

// --- ACTIONS ---
export interface ISetTagsAction extends Action<TagsActionEnum> {
    type: TagsActionEnum.SET_TAGS
    payload: TagType[]
}

export interface ISetTagsLoadingStateAction extends Action<TagsActionEnum> {
    type: TagsActionEnum.SET_LOADING_STATE
    payload: LoadingStateEnum
}

export interface IFetchTagsAction extends Action<TagsActionEnum> {
    type: TagsActionEnum.FETCH_TAGS
}
