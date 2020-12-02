import React from 'react';
import {useState} from 'react'
import {useDispatch} from 'react-redux';
import { saveExpression } from '../Redux/Actions/operationActions'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';


const Card = (props) => {

   const [able, setAble] = useState(false)
   
   const cambiarAble = () => {
           setAble(true)
   }
   


   const dispatch =  useDispatch()

   const modifyResults = (e) => {

        switch (e) {
          
            case "X":
               break;

            case "Edit":
           
            break;

            case "✔":
                Alert.alert("Ha editado de manera correcta")
            break;
          
            default:
               break;
          }
        } 
   
    
   
   return (
   <>

<View style={styles.container}>    
    <View style={styles.card}>
       
       <TextInput editable={able} style={styles.cardText}>{props.valor}</TextInput>
       
            <TouchableOpacity style={styles.cardButtons} onPress={() => modifyResults('X')}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardButtons} onPress={() => cambiarAble()}>
                <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cardButtons} onPress={() => modifyResults('✔')}>
                <Text style={styles.edit}>✔</Text>
            </TouchableOpacity>                      
    </View>  
</View>   
   </>
   )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#540698',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft:20,
        width:300,
        height:50,
        marginLeft:30,
        marginTop:20,
        borderRadius:10,
        overflow:'hidden',
    
      },  
    card:{
        flexDirection:'row',
        paddingTop:25,
        
     },
     cardButtons:{
         flexDirection:'row',
         justifyContent:'space-around',
         paddingBottom:20
        
        },

     cardText:{
         fontSize:19,
         color:'white',
         paddingBottom:25,
         marginRight:10
         
     },

     delete:{
        color:'white',
        fontSize:15,
        padding:10,
        overflow:'hidden',
        backgroundColor:'red',
        height:36,
        borderRadius:10,   
             
     },

     edit:{
        color:'black',
        fontSize:14,
        padding:10,
        overflow:'hidden',
        backgroundColor:'#91F55C',
        height:35,
        borderRadius:10,
        marginLeft:15
    }
 })

export default Card


   
   /*  listExpression.splice(0, listExpression.length) */