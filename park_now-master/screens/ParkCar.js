import React from 'react';
import {Text,View,StyleSheet} from 'react-native';


const Park=({navigation})=>{
    return(
    <View  style={ styles.container }>
        <Text>Park car Page </Text>
    </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        textAlign: "center",
      
    }

});
export  default Park;