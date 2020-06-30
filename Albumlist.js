
import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView, ImageBackground, TouchableOpacity,TextInput,AsyncStorage } from 'react-native';
import icon from "./json/icon.json";

const assign = ({navigation})=>{

    return(
        <View style={styles.scroview}>
      
          
          <View style={styles.logo}> 
          <Image source={{uri:icon["logo"]}}style={{width:380,height:250}}/>
          </View>
          
            <View style={styles.mycard}>
            <View style={styles.mycard_left}> 
            <View style={styles.account}>
             <Image source={{uri:icon["account"]}}style={{width:30,height:30}}/>
             </View>
             <Text style={styles.information}>帳號</Text>
             </View>
            
             <View style={styles.inputbox}>
             <TextInput 
             placeholder="abc@gmail.com"
             placeholderTextColor="#40230D"
             
             />
            </View>
          </View>  
         
             
           
        
        <View style={styles.mycard}>
        <View style={styles.mycard_left}> 
        <View style={styles.lock}>
          <Image source={{uri:icon["lock"]}}style={{width:30,height:30}}/>
        </View>  
          <Text style={styles.information_1}>密碼</Text>
         </View> 
          <View style={styles.inputbox_2}>
          <TextInput
          placeholder="請輸入6個字元以上"
          placeholderTextColor="#40230D"
          secureTextEntry
          maxLength={8}
          />    
          </View>   
        </View>
        <TouchableOpacity style={styles.in}>
            
            <Text style={styles.inname}>登入</Text>
        </TouchableOpacity>
        <View style={styles.information_2}>
        <Text style={styles.join}>還沒加入會員嗎?</Text>
        <Text style={styles.join_2}>加入我們</Text>
        </View>   
   </View>     

    );
   
  }
  
  
  const styles=StyleSheet.create({
  
 
 scroview:{
     backgroundColor:"#F9D9A6",
     width:500,
     height:800,
     
 },
    logo:{
      width:"55%",
      marginTop:100,
      marginLeft:65,
      alignItems:"center",
      justifyContent:"flex-start",
      

    },
    mycard_left:{
      width:100,
      height:80,
      backgroundColor:"#40230D",
      flexDirection:"row",
      alignContent:"center",
      
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      
    },
    mycard:{
      width:365,
      height:80,
      marginLeft:20,
      backgroundColor:"#FFFFFF",
      alignItems: "center",
      flexDirection:"row",
      paddingLeft:0,
      
      marginTop:20,
      borderRadius:20,

    },
    account:{
       marginTop:20,
       marginLeft:5,

    },
    lock:{
        marginTop:20,
        marginLeft:5,
    },
    information:{
        color:"#F9D9A6",
        fontSize:20,
        fontWeight:"bold",
        marginTop:20,
    },
    information_1:{
        color:"#F9D9A6",
        fontSize:20,
        fontWeight:"bold",
        marginTop:20,
    },
in:{
    width:365,
    height:80,
    backgroundColor:"#40230D",
    alignItems:"center",
    borderRadius:20,
    marginLeft:20,
    marginTop:20,
},
inname:{
    fontSize:30,
    color:"#F9D9A6",
    fontWeight:"bold",
    marginTop:18,
},
information_2:{
    marginLeft:85,
    marginTop:5,
    flexDirection:"row",
},
join:{
    fontSize:20,
    color:"#40230D",
    fontWeight:"bold",

},
join_2:{
    fontSize:20,
    color:"#40230D",
    fontWeight:"bold",
    textDecorationLine:"underline",
},
inputbox:{
marginLeft:15,

 },
 inputbox_2:{
     marginLeft:15,
 }

 
   
  },
  )
  export default assign; 