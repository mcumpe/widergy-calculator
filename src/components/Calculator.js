import React from 'react';
import 'react-native-gesture-handler';
import {useState, useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux';
import  {saveExpression}  from '../Redux/Operations/Actions/operationActions'
import axios from 'axios'
import { API } from '../config/API'   

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';


const Calculator = ({navigation},props) => {
  
  const [expression, setExpression] = useState({
    expression:"",
  })

const [result, setResult] = useState('')
const [cont , setCont] = useState(1)


const dispatch =  useDispatch()
const store = useSelector(store => store.operation.expression)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,'=','0','.']
const signs  =  ['DEL','C','+','-','*','/',]
const butonsFunc = ['SAVE', 'FORM'] 

                  

           useEffect(() => {
          
               getAPI()   

       },[]);




const getAPI = async store => {

  fetch('https://private-4de685-martincumpe.apiary-mock.com/operation')
  .then(res => res.json())
  .then(data => {
    data.map(item => {
           item.resultados.map(response => {
             dispatch(saveExpression(response.id, response.operation))
         
       })
    })
  })
}






      




let operation = []
  for(let i=0;i<signs.length;i++){
   operation.push(
     <TouchableOpacity onPress={() => operatorState(signs[i])}>
         <Text keys={i} style={styles.signosText}>{signs[i]}</Text> 
     </TouchableOpacity>
    )
  }






  

  
  const inputVerification = (value) => {  
    let check
    check = value.substring(0)
    setExpression({expression:validation(check)})
  }



  const viewButton = (e) => {
    let resultExpression 
   
    if(e === "="){
    try{
      resultExpression = eval(expression.expression)  
      setResult(resultExpression) 

    }
      catch{
        Alert.alert('Operacion invalida');
      }
    }
    
    setExpression({expression:validation(expression.expression+e)})
  }




const validation = (string) => {
  let stringToCheck = string.split("")
  
     for(let i=0;i<stringToCheck.length;i++){
      if(stringToCheck[i] === "="){
        stringToCheck[i] = ""
      }
    }
    
    return stringToCheck.join('')
}



  

  const operatorState = (e) => {

    switch (e) {
      case "DEL":
        setExpression ({expression:""})
        setResult("")
        break;
      
      case "C":
        setExpression ({expression:expression.expression.slice(0,-1)})
        break;
      case "+":
        setExpression({expression:expression.expression+e})
        break;
        
      case "-":
        setExpression({expression:expression.expression+e})
        break;
          
      case "*":
        setExpression({expression:expression.expression+e})
        break;
      
      case "/":
        setExpression({expression:expression.expression+e})
        break;
      
        case "SAVE":
          if(expression.expression === ''){
          
            Alert.alert(
              '¡ERROR AL INTENTAR GUARDAR EXPRESION!',
              '¡No se registro operacion!',
              [
                 {
                  text: 'Cancel',
                  style: 'cancel'
                },
                { text: 'OK',}
              ],
              { cancelable: false }
            );
            break;
          
          }
          
          setCont(cont+1)
          dispatch(saveExpression(cont,expression.expression))

        break;

        case "FORM":
          navigation.navigate('Encuesta')
        break;

      default:
        break;
      }
    } 


 


    return (
    <>


     <Button title="Ir a history" 
     onPress={() => navigation.navigate('History')}/>
     
        <View style={styles.container}>
          
       
          <View style={styles.result}>
              <Text style={styles.numEx}>{result}</Text>
          </View>
        
        
        
        <View style={styles.calculation}>
            <TextInput onChangeText={text => inputVerification(text)} style={styles.numEx}>{validation(expression.expression)}</TextInput>
        </View>
        

      


        <View style={styles.buttons}>
            <View style={styles.numbers}>
              
           
              
                <View style={styles.menuFunc}>
                  {butonsFunc.map(buton => {
                   return(
                   <TouchableOpacity onPress={() => operatorState(buton)}>
                       <Text style={styles.btnFunc}>{buton}</Text>
                   </TouchableOpacity>
                   )  
                })}
                  
                </View>
              
              <View>
                  
          <FlatList
          numColumns={3}
          data={numbers}
          keyExtractor={(index) => index.toString()}
          renderItem={({item,index}) => (
          
                <View style={styles.keypadStyles}>
                  <TouchableOpacity onPress={() => viewButton(item)}>
                    <Text style={styles.btnText}>{item}</Text>
                  </TouchableOpacity>
                </View>
           )}
          />
          </View>
        </View>  
         
          <View style={styles.operations}>
                 {operation}
          </View>
        </View>
      </View>
   

    </>
   );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    keypadStyles:{
       flex:1, 
       alignItems:'center',
       padding:15,
    },
    result:{
      flex:6,
      backgroundColor:'#EAECEE',
    },
    calculation:{
      flex:6,
      borderWidth: 1,
      backgroundColor:'#E8F8F5',
    },
    buttons:{
      flexGrow: 7,
      flexDirection:'row'
    },
    

    numbers:{
      flex:4,
      backgroundColor:'#EAECEE',
      justifyContent:'center'
    },
    operations:{
      flex:0.8,
      backgroundColor:'black',
      justifyContent:'space-around',
      alignItems:'center'
    },
    btnText:{
      fontSize:30,
      borderWidth: 0.4,
      width:70,
      height:50,
      paddingLeft:25,
      borderRadius:15,
      backgroundColor:'#F4F6F6'
    },
    
    signosText:{
      fontSize:20,
      color:'white'
    },
    numEx:{
      fontSize:30,
    },
    menuFunc:{
      flex:1,
      backgroundColor:'#DFDFDF',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around'
    },
    btnFunc:{
      fontSize:15,
      borderWidth: 0.3,
      width:90,
      height:50,
      paddingLeft:25,
      paddingTop:10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10,
      backgroundColor:'white'
    }
  });

export default Calculator

