export interface DefaultType {
  _id?: string
  createdAt?: string
  updatedAt?: string
}

export interface InitialStateForManyType<T, E> {
  items: T
  loading: E
}

export interface InitialStateForManyType<T, E> {
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

// --- TAG ---
export interface TagType extends DefaultType {
  name: string
  count: string
}