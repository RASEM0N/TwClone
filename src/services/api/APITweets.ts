import axios from '../../core/api'
import { OneTweetResponseType, TweetRequestDataType, TweetsResponseType } from "./types";

class APITweets {
    async getTweets(): Promise<TweetsResponseType> {
        const response = await axios.get(`/tweets`)
        return response.data
    }

    async getTweetById(id: string): Promise<OneTweetResponseType> {
        const response = await axios.get(`/tweets/${id}`)
        return response.data
    }

    async addTweet(tweet: TweetRequestDataType): Promise<OneTweetResponseType> {
        const response = await axios.post(`/tweets`, tweet)
        return response.data
    }
}

export const apiTweets = new APITweets()
