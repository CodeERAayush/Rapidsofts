import { Alert } from 'react-native'
import { API } from '../api'
import apiService from '../api/ApiClient'

export const LoginUser = async (data) => {
    try {
        const response = await apiService.post(API.LOGIN, data)
        return response.data
    } catch (error) {
        console.log(error.response.data.message)
        Alert.alert(error.response.data.message||"Some Error Occurred")
        throw error.response || error
    }
}