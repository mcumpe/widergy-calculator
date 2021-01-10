import React from 'react';
import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { editExpression,deleteIdExpression } from '../Redux/Operations/Actions/operationActions'
import axios from 'axios'
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
   const [staticValue, setStaticValue] = useState('')
   
   const store = useSelector(store => store.operation.expression)
   const dispatch =  useDispatch()
  


 


   const viewInfo = (valor) => {    
       if(able === false){
          return 0
      }

      for(let i=0; i<store.length; i++){
           if(store[i].id === props.id){   
           dispatch(editExpression(props.id,valor)) 
         }
      } 
   Alert.alert("¡Expresion modificada con EXITO!")
   }

   
   const modifyResults = (e,id) => {

        switch (e) {
          
            case "X":
               dispatch(deleteIdExpression(props.id))
              
            break;

            case "Edit":
                 setAble(true) 
            break;
        
            default:
               break;
          }
        } 
    
   return (
   <>

    <View style={styles.container}>    
      <View style={styles.card}>
       
       <TextInput editable={able} style={styles.cardText} onChangeText={(e) => setStaticValue(e)}>{props.valor}</TextInput>
       
            <TouchableOpacity style={styles.cardButtons}  onPress={() => modifyResults('X')}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardButtons} onPress={() => modifyResults("Edit")}>
                <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cardButtons} onPress={(valor) => viewInfo(staticValue)}>
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


   
  