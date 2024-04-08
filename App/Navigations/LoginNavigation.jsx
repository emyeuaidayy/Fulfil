import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Signin from '../Screens/SignInScreen/Signin';
import Signup from '../Screens/SignUpScreen/Signup';
import ForgotPass from '../Screens/ForgotPassScreen/ForgotPass'
import Login from '../Screens/LoginScreen/Login' 
import HomeScreen from '../Screens/HomeScreen/HomeScreen'

const Stack = createStackNavigator();

export default function SignNavigation() {
  return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
          }}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="SignIn" component={Signin}/>
          <Stack.Screen name="SignUp" component={Signup}/>
          <Stack.Screen name="ForgotPass" component={ForgotPass}/>
          <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
  );
}