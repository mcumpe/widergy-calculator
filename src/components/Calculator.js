import React from 'react';
import {useState} from 'react'
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



const Calculator = ({navigation}) => {

  const [expression, setExpression] = useState({
    expression:"",
  })

  const [result, setResult] = useState('')


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,'=','0','.']
const signs  =  ['DEL','C','+','-','*','/',]




/* ------------------ Creacion de menu de signos ------------------*/
let operation = []
  for(let i=0;i<signs.length;i++){
   operation.push(
     <TouchableOpacity onPress={() => operatorState(signs[i])}>
         <Text keys={i} style={styles.signosText}>{signs[i]}</Text> 
     </TouchableOpacity>
    )
  }
/* ------------------ Creacion de menu de signos ------------------*/






/* --------------------  Funciones  --------------------*/
  
/* Con esta funcion controlo lo valores de input ingresador por teclado */
  
  const inputVerification = (value) => {  
    let check
    check = value.substring(0)
    setExpression({expression:validation(check)})
  }


/* Con esta funcion lo que hago es Realizar los calculos cuando aparece el signo = */
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



/* Esta es mi funcion validacion para eliminar el signo = y evitar problemas en los calculos*/
const validation = (string) => {
  let stringToCheck = string.split("")
  
     for(let i=0;i<stringToCheck.length;i++){
      if(stringToCheck[i] === "="){
        stringToCheck[i] = ""
      }
    }
    
    return stringToCheck.join('')
}
  
/* En esta funcion ingreso los signos de calculos */
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

      default:
        break;
      }
    } 

/* --------------------  Funciones  --------------------*/

      
    return (
    <>
     <Button title="Ir a history" 
     onPress={() => navigation.navigate('History')}/>

        <View style={styles.container}>
          
        {/* ------------------   En este VIEW se va a mostrar los resultados ----------------*/}  
          <View style={styles.result}>
              <Text style={styles.numEx}>{result}</Text>
          </View>
        

        {/* ------------------   En este VIEW se va a calcular las expresiones ----------------*/}
        <View style={styles.calculation}>
            <TextInput onChangeText={text => inputVerification(text)} style={styles.numEx}>{validation(expression.expression)}</TextInput>
        </View>



        <View style={styles.buttons}>
            <View style={styles.numbers}>
              <View>
                  



          <FlatList
          numColumns={3}
          data={numbers}
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
      flex:4,
      backgroundColor:'#EAECEE',
    },
    calculation:{
      flex:4,
      borderWidth: 1,
      backgroundColor:'#E8F8F5',
    },
    buttons:{
      flexGrow: 7,
      flexDirection:'row'
    },
    
    //Estilos del view de botones 
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
      borderWidth: 1,
      width:70,
      height:50,
      paddingLeft:25,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10,
      backgroundColor:'#F4F6F6'
    },
    
    signosText:{
      fontSize:20,
      color:'white'
    },
    numEx:{
      fontSize:30,
    }
  });

  export default Calculator 