import { TagType, TweetType, UserPrivateType, UserPublicType } from '../../store/types'

interface ResponseType<T, E = any> {
    status: 'success' | 'error'
    data?: T
    errors?: E
    token?: string
}

// --- AUTHORIZATION ---
export interface AuthTokenType {
    token: string
}

export interface LoginRequestDataType {
    username: string
    password: string
}

export interface AuthorizationResponseUserType extends ResponseType<UserPrivateType> {}

// --- ----
export interface uploadImageResponseType extends ResponseType<{ photoUrl: string }> {}

// --- USERS ---
export interface getUserByIdResponseUserType extends ResponseType<UserPublicType> {}
export interface getAllUserResponseUserType extends ResponseType<UserPublicType[]> {}

// --- TWEETS ---
export interface TweetsResponseType extends ResponseType<TweetType[]> {}

export interface OneTweetResponseType extends ResponseType<TweetType> {}

export interface TweetRequestDataType {
    text: string
    file?: File
    photoUrl?: string
}

// --- TAGS ---
export interface TagsResponseType extends ResponseType<TagType[]> {}

export interface OneTagResponseType extends ResponseType<TagType> {}

export interface TagRequestDataType {}
