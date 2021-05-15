export interface DefaultType {
    _id: string
    createdAt?: string
    updatedAt?: string
}

// --- USER ---
export interface UserPublicType extends DefaultType {
    avatarUrl: string
    username: string
    fullname: string
}

// полные данные о пользователе
export interface UserPrivateType extends UserPublicType {
    email: string
    confirmed: boolean
}

// --- INITIAL STATE ---
export interface InitialStateForManyType<T, E> {
    items: T
    loading: E
}

export interface InitialStateForOneType<T, E> {
    item: T
    loading: E
}

// --- TWEET ---
export interface TweetType extends DefaultType {
    text: string
    user: UserPublicType
}

// --- TAG ---
export interface TagType extends DefaultType {
    name: string
    count: string
    user: UserPublicType
}

// --- ENUM ---
export enum LoadingStateEnum {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
}

export enum LoadingFormStateEnum {
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    LOADING = 'LOADING',
}
