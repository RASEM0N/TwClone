import { TagType, TweetType } from '../../store/types'

interface ResponseType<T, E = any> {
    status: 'success' | 'error'
    data?: T
    errors?: E
}

// --- AUTHORIZATION ---
export interface AuthTokenType {
    token: string
}
export interface LoginRequestDataType {
    email: string
    password: string
}

// --- TWEETS ---
export interface TweetsResponseType extends ResponseType<TweetType[]> {}

export interface OneTweetResponseType extends ResponseType<TweetType> {}

export interface TweetRequestDataType extends AuthTokenType {}

// --- TAGS ---
export interface TagsResponseType extends ResponseType<TagType[]> {}

export interface OneTagResponseType extends ResponseType<TagType> {}

export interface TagRequestDataType extends AuthTokenType {}

