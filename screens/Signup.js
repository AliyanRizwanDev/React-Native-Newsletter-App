import * as React from 'react';
import { Button, StyleSheet, View,Text, Image, TextInput ,Alert } from 'react-native';


const Signup = ({ navigation }) => {
  
  const [email,SetEmail] = React.useState();
  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
    } else {
        Alert.alert("Thank You", "Thank you for subscribing, stay tuned!");
    }
};
    
  return(
      
    <View style={mainStyles.main}>
      
      
      <Image resizeMode="contain" style={mainStyles.logo} source={require('../img/little-lemon-logo-grey.png')}/>
      <Text style={mainStyles.text} >Subscribe to your newsletter for latest delicious recipes!</Text>
      <TextInput  style={mainStyles.input} placeholder='Type your email' onChangeText={SetEmail} value={email}/> 
      <Text style={mainStyles.btn}  onPress={validateEmail}>Subscribe</Text>

      
      
      
      </View>
  );
};
const mainStyles = StyleSheet.create({

  main:{
    flex:1,
    alignItems:"center",
    marginTop:50,
  },
  text:{
    marginTop:30,
    fontSize:20,
    width:300,
    textAlign:"center"

  },
  logo: {
    height: 100,
    width: 100,
    alignItems:"center"
  },
  btn:{
    width:300,
    fontSize:20,
    backgroundColor:"#40524C",
    color:"white",
    borderRadius:5,
    paddingTop:7,
    paddingBottom:7,
    textAlign:"center",
  
  },
  input:{
    borderWidth:2,
    width:300,
    borderRadius:7,
    padding:8,
    margin:20,
    textAlign:"center",
    fontSize:20

    
  }

});
export default Signup;
