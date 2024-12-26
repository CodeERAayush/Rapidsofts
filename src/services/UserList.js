import { Alert } from 'react-native'
import { API } from '../api'
import apiService from '../api/ApiClient'

export const getUsersList = async (page) => {
    try {
        const response = await apiService.get(API.USERS+`?page=${page}`)
        return response.data
    } catch (error) {
        Alert.alert(error.response.data.message||"Some Error Occurred")
        throw error.response || error
    }
}