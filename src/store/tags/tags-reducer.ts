import { InitialStateType, TagsActionEnum } from './tags-types'
import { LoadingStateEnum, TagType } from '../types'
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

// ------ ------ ------ ------ ------
const initialState: InitialStateType = {
    items: [],
    loading: LoadingStateEnum.NEVER,
}

// ------ ------ ------ ------ ------
const tags = createSlice({
    name: 'tags',
    initialState: initialState,
    reducers: {
        setTags: (state, action: PayloadAction<TagType[]>) => {
            state.items = action.payload
            state.loading = LoadingStateEnum.LOADED
        },
        setStatusLoadingTags: (state, action: PayloadAction<LoadingStateEnum>) => {
            state.items = []
            state.loading = action.payload
        },
    },
})

// ------ ------ ------ ------ ------
export const fetchTagsAction = createAction<void, TagsActionEnum.FETCH_TAGS>(
    TagsActionEnum.FETCH_TAGS
)

export default tags.reducer
export const { setTags, setStatusLoadingTags } = tags.actions
