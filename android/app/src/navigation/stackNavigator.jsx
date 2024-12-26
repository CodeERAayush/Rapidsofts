import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../../../src/screens/LoginScreen';
import UsersList from '../../../../src/screens/UserListScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../src/context/AuthContext';

const Stack = createStackNavigator();

function MyStack() {

    const {token} = useAuth()

  return (
    <Stack.Navigator>
     {!token? <Stack.Screen name="Login" component={Login} />:
      <Stack.Screen name="UsersList" component={UsersList} />}
    </Stack.Navigator>
  );
}

export default MyStack