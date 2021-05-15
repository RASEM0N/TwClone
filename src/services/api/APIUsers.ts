import axios from '../../core/api'
import { getAllUserResponseUserType, getUserByIdResponseUserType } from './types'

class APIUsers {
    async getAll(): Promise<getAllUserResponseUserType> {
        const response = await axios.get<getAllUserResponseUserType>(`/users`)
        return response.data
    }

    async getById(id: string): Promise<getUserByIdResponseUserType> {
        const response = await axios.get<getUserByIdResponseUserType>(`/users/${id}`)
        console.log(response);
        return response.data
    }
}

export const apiUsers = new APIUsers()
