import axios from '../../core/api'
import { TagsResponseType } from './types'

class APITags {
    async getTags(): Promise<TagsResponseType> {
        const response = await axios.get(`/tags`)
        return response.data
    }
}

export const apiTags = new APITags()
