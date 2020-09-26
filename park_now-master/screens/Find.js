import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from './EditProfileScreen';
import FindMyPosition from './FindMyPosition';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const FindStack = createStackNavigator();
const FindPosition=({navigation})=>{
    return(
      
        <FindStack.Navigator
        screenOptions ={{
          headerStyle:{
            backgroundColor:"#6f1282",   
            height:55,
          },
          
          headerTitleAlign: 'center',
          headerShown: true,
          headerTintColor:"#fff",
          headerTitleStyle:{
          },
         
  
       }}
     
        
        >
          <FindStack.Screen name="Find My Position" component={FindMyPosition}   options={{
        headerLeft: () => (
          <View style={{marginLeft: 20}}>
            <Icon.Button
              name="chevron-left"
              size={25}
              color='white'
              backgroundColor="#6f1282"
              onPress={() => navigation.goBack()}
            />
          </View>
        ),}}/>
        </FindStack.Navigator>
      );
}

export default FindPosition;