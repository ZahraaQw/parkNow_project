import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Switch
} from 'react-native-paper';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent=(props)=>{

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView{...props}>
              
   
             <TouchableOpacity style={ styles.container }>
             <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row'}}>
                        <Avatar.Image 
                                 source={require('./avatar.png')} 
                                size={70}
                            />
                           
                      
                       </View>
                       <View style={ {flexDirection:'column'}}>
                                <Title style={styles.title}>Zahraa QW</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                       </View>
                       </View>

             </TouchableOpacity>
     
         
               <Drawer.Section style={styles.drawerSection}>
             <DrawerItem 
             icon={()=>(
             <Icon
             name="home" 
             color="gray"
             size={22} /> )
             }
             label="Home"
             labelStyle={styles.lable}
             onPress={() => {props.navigation.navigate('Home')}}
             />
            
            <DrawerItem 
             icon={()=>(
             <Icon
             name="user-circle"
             color="gray"
             size={22} /> )
             }
             label="Profile"
             labelStyle={styles.lable}

             onPress={() => {props.navigation.navigate('Profile')}}
             />
             <DrawerItem 
             icon={()=>(
             <Icon
             name="plus"
             color="gray"    
             size={22} /> )
             }
             label="Park my car"
             labelStyle={styles.lable}
             onPress={() => {props.navigation.navigate('Park')}}
             />
              
            <DrawerItem 
             icon={()=>(
             <Icon
             name="image"
             color="gray"    
             size={22} /> )
             }
             label="Enterance Scanning"
             labelStyle={styles.lable}
             onPress={() => {props.navigation.navigate('Enter')}}
             />
               <DrawerItem 
             icon={()=>(
             <Icon
             name="outdent"
             color="gray"
             size={22} /> )
             }
             label="Exit Scanning"
             labelStyle={styles.lable} 
             onPress={() => {props.navigation.navigate('Exit')}}
             />

             <DrawerItem activeBackgroundColor="#e8d8e8"
             
             icon={()=>(
             <Icon
             name="history"
             color="gray"
             size={22} /> )
             }
             label="Parking History"  
             labelStyle={styles.lable}
             onPress={() => {props.navigation.navigate('Timer')}}
            
             />

           <DrawerItem 
             icon={()=>(
             <Icon
             name="map-pin"
             color="gray"
             size={22} /> )
             }
             label="Find My Position"
             labelStyle={styles.lable}
             onPress={() => {props.navigation.navigate('Find')}}
             />
         
         </Drawer.Section>

            </DrawerContentScrollView>
         <Drawer.Section style={styles.bottomDrawerSection}>
             <DrawerItem
             icon={()=>(
             <Icon
             name="arrow-left"
             color="gray"
             size={22}
             />
             )
             }
             label="Sign out"
             labelStyle={{
               color:"#401147",
               fontSize:15,
               fontWeight:"bold", 
             }}
             onPress={() => {props.navigation.navigate('SingOut')}}
             />
         </Drawer.Section>
        </View>
    );

}

const styles = StyleSheet.create({

  container: {
      paddingLeft:95,
      paddingBottom:20,
      paddingTop:30,
      backgroundColor:"#6f1282",
      
     // borderTopRightRadius:180,
 
},

    drawerContent: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color:"#c49fc4",
      
    },
     
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color:"#c49fc4",
    },
    drawerSection: {
      marginTop: 5,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#e8d8e8",
        borderTopWidth: 1
    },
   lable:{
     color:"#6f1282",
     fontSize:14,
     fontWeight:"bold",


   },
   icon:{
       color:'white',
 
   },

    header:{
   
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:'white',
     borderTopRightRadius:100,
 
      
  },

  drawer_items:{
    padding:0.1,
    
  }
  });

export default DrawerContent;