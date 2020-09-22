import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text,View,StyleSheet, TextInput,Animated, Dimensions, TouchableOpacity,ScrollView} from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
class Signup extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            typing_email:false,
            typing_user:false,
            typing_pass:false,
            typing_conPass:false,
            isValidUser:true,
            isValidPassword:true,
            isValidEmail:true,
            isValidConPassword:true,
            animation_login:new Animated.Value(width-40),
            enable:true,
            disabled_press:true,

         };
    }
      
    _foucus(value){
      

            if(value=="email"){
                this.setState(
                    {
                        typing_email:true,
                        typing_user:false,
                        typing_pass:false,
                        typing_conPass:false
                    }
                )
            }

            else  if(value=="user"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:true,
                        typing_pass:false,
                        typing_conPass:false
                    
                    }
                )
            }

            else  if(value=="pass"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:false,
                        typing_pass:true,
                        typing_conPass:false
                    
                    }
                )
            }

            else  if(value=="passC"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:false,
                        typing_pass:false,
                        typing_conPass:true
                    }
                )
            }
     
    }

  _typing(){
    return (
        <TypingAnimation 
          dotColor="#6f1282"
          style={{marginRight:25}}
        
        />
      );
  
  }
  _animation(){
      Animated.timing(
          this.state.animation_login,{
              toValue:40,
              duration:250
          }
      ).start();

      setTimeout(()=>{
          this.setState({
              enable:false,
              typing_email:false,
              typing_user:false,
              typing_pass:false,
              typing_conPass:false
          })
      },150);
  }
        validate(text,type){

            alph=/^[a-zA-Z]+$/
            num=/^[0-9a-zA-Z]+$/
            email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(type=='username'){
            if(alph.test(text))
            {
            this.setState({
                isValidUser:true,
            })
            }
            else{

                this.setState({
                    isValidUser:false,
                })
            } 
        }
        else if(type=='password'){
            if((num.test(text)) && (text.trim().length >7))
            {
            this.setState({
                isValidPassword:true,
            })
            }
            else{

                this.setState({
                    isValidPassword:false,
                })
            }
        }
        else if(type=='conpassword'){
            if((num.test(text)) && (text.trim().length >7))
            {
            this.setState({
                isValidConPassword:true,
            })
            }
            else{

                this.setState({
                    isValidConPassword:false,
                })
            }
        }
        else  if(type=='email'){
            if(email.test(text))
            {
            this.setState({
                isValidEmail:true,
            })
            }
            else{
                this.setState({
                    isValidEmail:false,
                })
            } 
        }
        }


    render(){
         const width =  this.state.animation_login;
    return(
        
        <View  style={ styles.container } >
            
            <LinearGradient  colors={["#eba9cf","#6f1282"]} 
             start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.6}}
             locations={[0,0.5,0.6]}
            style={ styles. header } >
                <Animatable.Text style={ styles.textSignup}
                animation="fadeInLeft"
                duration={4000}> Welcome Back</Animatable.Text>
                <Text style={styles.text} >Sing up! Create Account </Text>
           </LinearGradient>

           <Animatable.View style={[styles.footer,{marginEnd:20}]}
            
            animation="bounceInUp"
            duration={5000}
           >
           <ScrollView>




             <Text style={[styles.title,{marginTop:10}]}>User Name</Text>
             <View style={styles.action}>
             <FontAwesome
                 name="user-o"
                 color="#05345a"
                 size={20}
                 style={{paddingTop:10,paddingEnd:4}}
              
              />
                 <TextInput
                 placeholder="Enter your name.."
                 style={styles.inputText}
                 onFocus={()=>this._foucus("user")}
                 onChangeText={(text)=>this.validate(text,'username')}
                 />
                     {this.state.typing_user ?
                 this._typing()
                  :null }
        
                 </View>
                 {this.state.isValidUser ? null :  
                        <Animated.View
                        animation="fadeInLeft" duration={500}> 
                    <Text style={styles.ErrMsg}>UserName must be  just character</Text>
                    </Animated.View>
                    }


                 <Text style={[styles.title,{marginTop:10}]}>E-mail</Text>
             <View style={styles.action}>
          
             <FontAwesome
                name="envelope-o"
                 color="#05345a"
                 size={20}
                 style={{paddingTop:10,paddingEnd:4}}
              
              />

                 <TextInput
                 
                 placeholder="Enter your email.."
                 style={styles.inputText}
                 onFocus={()=>this._foucus("email")}
                 onChangeText={(text)=>this.validate(text,'email')}
                 />
                  {this.state.typing_email ?
                 this._typing()
                  :null }
                 </View>
                 {this.state.isValidEmail ? null : 
                    <Animated.View
                        animation="fadeInLeft" duration={500}
                        > 
                        <Text style={styles.ErrMsg}>Email must follow Email format. </Text>
                        </Animated.View>
                 }
                  
                 
                 <Text style={[styles.title,{marginTop:20}]}>Password</Text>
             <View style={styles.action}>
                <FontAwesome
                    name="lock"
                    color="#05345a"
                    size={20}
                    style={{paddingTop:10,paddingEnd:4}}
                
                />
                 <TextInput
                 secureTextEntry
                 placeholder="********"
                 style={styles.inputText}
                 onFocus={()=>this._foucus("pass")}
                 onChangeText={(text)=>this.validate(text,'password')}
                 />
            {this.state.typing_pass ?
                 this._typing()
                  :null }
                 </View>
                 {this.state.isValidPassword ? null : 
                    <Animated.View
                        animation="fadeInLeft" duration={500}
                        > 
                        <Text style={styles.ErrMsg}>Password must be 8 long  . </Text>
                        </Animated.View>
                 }

                 <Text style={[styles.title,{marginTop:20}]}> Confirm Password</Text>
             <View style={styles.action}>
             <FontAwesome
                    name="lock"
                    color="#05345a"
                    size={20}
                    style={{paddingTop:10,paddingEnd:4}}
                
                />
                 <TextInput
                  secureTextEntry
                 placeholder="********"
                 style={styles.inputText}
                 onFocus={()=>this._foucus("passC")}
                 onChangeText={(text)=>this.validate(text,'conpassword')}
                 />
         {this.state.typing_conPass ?
                 this._typing()
                  :null }
                  
                 </View>
                 {this.state.isValidConPassword ? null : 
                    <Animated.View
                        animation="fadeInLeft" duration={500}
                        > 
                        <Text style={styles.ErrMsg}>Password must be 8 long  . </Text>
                        </Animated.View>
                 }
                 </ScrollView>
           </Animatable.View>
           <TouchableOpacity
     
            style={{ opacity:this.state.disabled_press ? 0.5 : 1 }}
       
            disabled={this.state.disabled_press}
           onPress={()=>this._animation()}>
            
           <View style={styles.Butt_cont}>
               <Animated.View style={[styles. anmation,{width}]}>
                {this.state.enable?
               <Text style={styles.logText}>Sign Up</Text>
               :
               <FontAwesome
               name="check"
                color="white"
                size={20}
               /> }
                
               </Animated.View>
           </View>
           </TouchableOpacity>
           <View style={styles.signUp}>
              
               <Text style={{color:'black'}}>you already have account? </Text>
               <Text style={{color:'blue'}}onPress={()=>this.props.navigation.goBack()}> Sign In</Text>

           </View>

           
 
        </View>
        
    );}

}


const width = Dimensions.get("screen").width;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:"white",
            justifyContent:'center'
        },

        
        header:{
            backgroundColor:"white",
            flex:1.6,
            justifyContent:"center",
            alignItems:"center",
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 800,
           
            
        },

        footer:{
            backgroundColor:"white",
           flex:2,
           padding:20,
           
           

        },
        textSignup:{
            color:"#fff",
            fontWeight:"bold",
            fontSize:25,
            paddingEnd:20,
         
        },
        text:{
            color:"#f7c202",
            fontSize:14,
           
        },

        title:{
         color:"black",
         fontWeight:"bold",
            fontSize:14,
        },

        action:{
            flexDirection:"row",
            borderBottomWidth:1,
            borderBottomColor:"#f2f2f2"
        },

        inputText:{
          flex:1,
          marginTop:1,
          paddingBottom:1,
          color:"gray"

        },
        Butt_cont:{
            justifyContent:'center',
            alignItems:'center'
        },
         anmation:{
             backgroundColor:"#6f1282",
             paddingVertical:10,
             marginTop:1,
             marginBottom:2,
             borderRadius:100,
             justifyContent:'center',
             alignItems:'center'
         },       
         signUp:{
            flexDirection:'row',
            justifyContent:'center',
            //marginTop:0,
             marginBottom:5
        },
         logText:{
             color:'white',
             fontWeight:'bold',
             fontSize:14
         },
         ErrMsg:{
            color:"red",
            fontSize:10

        }

     } );






    export  default Signup;