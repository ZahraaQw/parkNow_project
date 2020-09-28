import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import App2 from './screens/App2';
import WelcomeScreen from './screens/WelcomeScreen';
import Signup from './screens/Signup';
import SignInScreen from './screens/SignInScreen';
import ForgetPass from './screens/ForgetPassword';
const Stack = createStackNavigator();
const isThereUser=true;
import Park from './screens/Park';

const App=()=>{

  return(
   <Park/>
  );
}
export default App;
