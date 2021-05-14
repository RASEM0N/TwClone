import axios from '../../core/api'
import { OneTweetResponseType, TweetRequestDataType, TweetsResponseType } from './types'

class APITweets {
    async get(): Promise<TweetsResponseType> {
        const response = await axios.get(`/tweets`)
        return response.data
    }

    async getById(id: string): Promise<OneTweetResponseType> {
        const response = await axios.get(`/tweets/${id}`)
        return response.data
    }

    async create(tweet: TweetRequestDataType): Promise<OneTweetResponseType> {
        const response = await axios.post(`/tweets`, tweet)
        return response.data
    }

    async delete(id: string): Promise<undefined> {
        const response = await axios.delete(`/tweets/${id}`)
        console.log(response.data);
        return response.data
    }
}

export const apiTweets = new APITweets()
