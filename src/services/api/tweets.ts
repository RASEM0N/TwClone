import axios from "axios"
import { TweetType } from '../../store/bundles/tweets'

class TweetAPI {


    async getTweets():Promise<TweetType[]>{
        const response = await axios.get('https://trycode.pw/c/61ONO.json')
        return response.data
    }
}

export default new TweetAPI()