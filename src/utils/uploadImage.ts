import axios from '../core/api'
import { uploadImageResponseType } from '../services/api/types'

export const uploadImage = async (photo: File): Promise<uploadImageResponseType> => {
    const formData = new FormData()
    formData.append('image', photo)

    const response = await axios.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return response.data
}
