import * as React from 'react';
import { View,Text, Image, StyleSheet, Pressable } from 'react-native';


const Home = ({ navigation }) => {
    

  return(
      
    <View style={mainStyles.main}>
      
      
      <Image resizeMode="contain" style={mainStyles.logo} source={require('../img/little-lemon-logo.png')}/>
      <Text style={mainStyles.text} >Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable onPress={()=>navigation.navigate('Signup')}><Text style={mainStyles.btn}>Newsletter</Text></Pressable>
      
      
      
      </View>
  );
};

const mainStyles = StyleSheet.create({

  main:{
    flex:1,
    alignItems:"center",
    marginTop:60
  },
  logo: {
    height: 250,
    width: 250,
    alignItems:"center"
  },
  text:{
    marginTop:100,
    fontSize:30,
    fontWeight:"bold",
    width:500,
    textAlign:"center"

  }
  
  
  ,
  btn:{
    width:300,
    fontSize:30,
    backgroundColor:"#40524C",
    color:"white",
    borderRadius:5,
    paddingTop:10,
    paddingBottom:10,
    textAlign:"center",
    marginTop:100
   




  }

});

export default Home;
