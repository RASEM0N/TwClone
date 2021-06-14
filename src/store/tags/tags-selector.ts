import { Selector } from 'reselect'
import { StateType } from '../store'
import { LoadingStateEnum, TagType } from '../types'
import { InitialStateType } from './tags-types'

// ------ ------ ------ ------ ------
export const getTagsState: Selector<StateType, InitialStateType> = (state) => state.tags
export const getTagsItems: Selector<StateType, TagType[]> = (state) => getTagsState(state).items

// ------ ------ ------ ------ ------
export const getLoadingStateTags: Selector<StateType, LoadingStateEnum> = (state) =>
    getTagsState(state).loading
