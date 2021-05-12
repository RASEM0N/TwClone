export interface DefaultType {
  _id?: string
  createdAt?: string
  updatedAt?: string
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
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}
export interface TagType extends DefaultType {
  name: string
  count: string
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