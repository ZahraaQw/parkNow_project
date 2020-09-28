import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from 'react-native';
//import Slots2 from './Slots2';
import Slots from './Slots';

import{NavigationContainer} from '@react-navigation/native';


const ParkStack = createStackNavigator();

const Park=()=>{

    return(
        <NavigationContainer >

        <ParkStack.Navigator
        screenOptions ={{
          headerStyle:{
            backgroundColor:"#6f1282", 
         //  backgroundColor:"gray",
           // opacity:0.3,  
            height:48,
          },
          
          headerTitleAlign: 'center',
          headerShown: true,
          headerTintColor:"#fff",
          headerTitleStyle:{
            fontSize:17,
            fontFamily:""
      
          },
         
  
       }}
     
        
        >
          <ParkStack.Screen name="Choose available slots" component={Slots} />
        </ParkStack.Navigator>
        </NavigationContainer>
      );
}

export default Park;
