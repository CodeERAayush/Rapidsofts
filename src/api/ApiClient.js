import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from ".";

const instance = axios.create({
    baseURL:API.BASE_URL,
    timeout:1000000
})

instance.interceptors.request.use(async(req)=>{
    const access_token=await AsyncStorage.getItem("token")
    if(access_token){
        req.headers.Authorization=`${access_token}`
    }
    return req;
})

export default instance;