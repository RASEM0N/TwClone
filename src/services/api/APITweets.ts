import axios from 'axios'
import { TweetType } from '../../store/types'
import { OneTweetResponseType, TweetsResponseType } from './types'

class APITweets {
    async getTweets(): Promise<TweetsResponseType> {
        const response = await axios.get(`/tweets`)
        return response.data
    }

    async getTweetById(id: string): Promise<OneTweetResponseType> {
        const response = await axios.get(`/tweets/${id}`)
        return response.data
    }

    async addTweet(tweet: TweetType): Promise<OneTweetResponseType> {
        const response = await axios.post(`/tweets`, tweet)
        return response.data
    }
}

export const apiTweets = new APITweets()
