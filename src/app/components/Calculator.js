import React from 'react';
import {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
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
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Calculator = () => {

  const [expression, setExpression] = useState({
    expression:"",
  })

  const [result, setResult] = useState('')


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,'=','.','%']
const signs  =  ['DEL','C','+','-','*','/',]



/* Creacion de menu de signos*/
let operation = []
  for(let i=0;i<signs.length;i++){
   operation.push(
     <TouchableOpacity onPress={() => operatorState(signs[i])}>
         <Text keys={i} style={styles.signosText}>{signs[i]}</Text> 
     </TouchableOpacity>
    )
  }


/* Funciones  */
  
  const viewButton = (e) => {
    let resultExpression 
    let stringFinal
    
    stringFinal = validation(expression.expression) 

    console.log("Mi stringFinal es --> ",stringFinal)
    if(e === "="){
      resultExpression = eval(stringFinal)  
      setResult(resultExpression) 
    }
    setExpression({expression:expression.expression+e})  
  }
  






const validation = (string) => {
  let stringToCheck = string.split("")
  let cadena3   

     for(let i=0;i<stringToCheck.length;i++){
      if(stringToCheck[i] === "="){
        stringToCheck[i] = ""
      }
    }
    cadena3 = stringToCheck.join('')
    console.log("Con cadena3 papu",cadena3)
    return cadena3
}
  





  const operatorState = (e) => {
    switch (e) {
      case "DEL":
        setExpression ({expression:""})
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
      






    return (
    <>
    
        <View style={styles.container}>
          
        {/* ------------------   En este VIEW se va a calcular los resultados ----------------*/}  
          <View style={styles.result}>
              <Text style={styles.numEx}>{result}</Text>
          </View>
        

        {/* ------------------   En este VIEW se va a calcular las expresiones ----------------*/}
        <View style={styles.calculation}>
            <Text style={styles.numEx}>{expression.expression}</Text>
        </View>



        
        <View style={styles.buttons}>
            <View style={styles.numbers}>
              <View>
                  
          <FlatList
          numColumns={3}
          data={numeros}
          renderItem={({item,index}) => (
         
                <View style={styles.test}>
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
      flex:1
    },
    test:{
       flex:1, 
       alignItems:'center',
       padding:15,
    },
    row:{
      justifyContent:'center',
      alignContent:'center'
    },
    result:{
      flex:2,
      backgroundColor:'#EAECEE',
    },
    barraIzq:{
      flex:1,
      alignItems:'center',
      alignSelf:'stretch',
      justifyContent:'center'
    },
    calculation:{
      flex:2,
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
    
    top:{
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
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
    white:{
      color:'white'
    },
    numEx:{
      fontSize:30,
    }
  });

  export default Calculator 