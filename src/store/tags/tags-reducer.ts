import produce, { Draft } from 'immer'
import { ActionType, InitialStateType, TagsActionEnum } from "./tags-types";
import { TagType } from "../types";
import { LoadingStateEnum } from '../tweets/tweets-types'

// --- INITIAL STATE ---
export const initialState = {
    items: [] as TagType[],
    loading: LoadingStateEnum.NEVER as LoadingStateEnum,
}

// --- REDUCER ---
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
