import axios from 'axios'
import { TweetType } from '../../store/bundles/tweets'
import { TagType } from "../../store/bundles/tags";

class APITweets {
    async getTweets(): Promise<TweetType[]> {
        const response = await axios.get(`/tweets`)
        return response.data
    }
    async getTweetById(id: string): Promise<TweetType>{
        const response = await axios.get(`/tweets?_id=${id}`)
        return response.data
    }
}
class APITags {
    async getTags(): Promise<TagType[]> {
        const response = await axios.get(`/tags`)
        return response.data
    }

    async getTagById(id: string): Promise<TagType>{
        const response = await axios.get(`/tags/${id}`)
        return response.data
    }
}

const apiTweets = new APITweets()
const apiTags = new APITags()


export { apiTweets, apiTags }
