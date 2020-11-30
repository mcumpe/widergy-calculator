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
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Calculator = () => {


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,'=','.','%']
const signos = ['+','-','*','/','CE','C']
let operation = []
  for(let i=0;i<signos.length;i++){
   operation.push(
     <TouchableOpacity style={styles.barraIzq}>
         <Text style={styles.signosText}>{signos[i]}</Text> 
     </TouchableOpacity>
   )
  }

    return (
    <>
     
  

      <View style={styles.container}>
        <View style={styles.result}></View>
        <View style={styles.calculation}></View>
        <View style={styles.buttons}>
        
            <View style={styles.numbers}>
              <View>
                  
          <FlatList
          numColumns={3}
          data={numeros}
          renderItem={({item,index}) => (
         
                <View style={styles.test}>
                  <TouchableOpacity>
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
    } 
  });

  export default Calculator 