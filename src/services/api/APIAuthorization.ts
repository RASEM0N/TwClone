import axios from '../../core/api'
import { AuthorizationResponseUserType, LoginRequestDataType } from './types'

class APIAuthorization {
    async getMe(): Promise<AuthorizationResponseUserType> {
        const response = await axios.get(`/users/me`)
        return response.data
    }

    async login(data: LoginRequestDataType): Promise<AuthorizationResponseUserType> {
        const response = await axios.post(`/auth/login`, data)
        return response.data
    }
}

export const apiAuth = new APIAuthorization()
