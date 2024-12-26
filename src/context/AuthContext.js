import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext()
export const useAuth = ()=> useContext(AuthContext)

const AuthProvider = ({children}) => {


    const [token,setToken] = useState("")

    const checkIfAlreadyLogged=async()=>{
        const oldToken= await AsyncStorage.getItem('token')
        if(oldToken){
            setToken(oldToken)
        }
    }

    useEffect(()=>{
        checkIfAlreadyLogged()
    },[])

  return (
    <AuthContext.Provider value={{token,setToken}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

const styles = StyleSheet.create({})