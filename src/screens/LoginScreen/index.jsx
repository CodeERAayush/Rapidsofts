import {
  Alert,
  StyleSheet,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Typography from '../../components/Typography';
import LabelledInput from '../../components/LabelledInput';
import {Colors} from '../../constants/Colors';
import { LoginUser } from '../../services/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../context/AuthContext';

const Login = ({navigation}) => {

    const {token,setToken} = useAuth()

  const [loginCred, setLoginCred] = useState({
    email: '',
    password: '',
  });

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = () => {
    if (!validateEmail(loginCred?.email)) {
      Alert.alert('Please enter valid email');
      return;
    }
    if(!loginCred?.password || loginCred.password.length<8){
        Alert.alert('Please Enter atleast 8 digit password');
        return ;
    }
    handleSubmit()
  };

  const handleSubmit=async()=>{
    const response = await LoginUser(loginCred)
    console.log("resp: ", response?.data?.token)
    if(response?.status_code==200){
        ToastAndroid.show("Login Successful", ToastAndroid.SHORT)
        setToken(response?.data?.token)
        await AsyncStorage.setItem('token', response?.data?.token)
        navigation.navigate("UsersList")
    }
    
  }

  return (
    <View style={styles?.container}>
      <Typography style={styles?.heading}>Login Form</Typography>
      <LabelledInput
        placeholderText={'Enter Email'}
        label={'Enter Your Email'}
        value={loginCred.email}
        onChangeText={text => setLoginCred({...loginCred, email: text})}
      />
      <LabelledInput
        placeholderText={'Enter Password'}
        label={'Enter Your Password'}
        value={loginCred.password}
        onChangeText={text => setLoginCred({...loginCred, password: text})}
      />
      <TouchableOpacity onPress={validate} style={styles?.loginBtn}>
        <Typography style={styles?.btnText}>Login</Typography>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor:Colors?.white
  },
  heading: {
    fontWeight: 'bold',
    marginVertical: 20,
    fontSize: 20,
  },
  loginBtn: {
    backgroundColor: Colors?.blue,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 10,
  },
  btnText: {
    color: Colors?.white,
  },
});
