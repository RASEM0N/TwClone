import { InitialStateForManyType, LoadingStateEnum, TagType } from '../types'

export interface InitialStateType extends InitialStateForManyType<TagType[], LoadingStateEnum> {}

// ------ ------ ------ ------ ------
export enum TagsActionEnum {
    FETCH_TAGS = 'tags/FETCH_TAGS',
}
