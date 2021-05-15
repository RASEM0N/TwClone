import axios from '../../core/api'
import { getAllUserResponseUserType, getUserByIdResponseUserType } from './types'

class APIUsers {
    async getAll(): Promise<getAllUserResponseUserType> {
        const response = await axios.get<getAllUserResponseUserType>(`/users`)
        console.log(response.data);
        return response.data
    }

    async getById(id: string): Promise<getUserByIdResponseUserType> {
        const response = await axios.post<getUserByIdResponseUserType>(`/users/${id}`)
        console.log(response.data);
        return response.data
    }
}

export const apiUsers = new APIUsers()
