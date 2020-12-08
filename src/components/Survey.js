import { NONE } from 'apisauce';
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, FlatList, TouchableOpacity, TextInput,Alert } from 'react-native';
import {Field, reduxForm } from 'redux-form'


const renderField = ({label}) => {
const [flag, setFlag] = useState(false)

  return (
    <>
      <View style={{flexDirection:'row',height:50, alignItems:'center'}}>
        <View>
        <Text style={{fontSize:14, fontWeight:'bold', width:80}}>{label}:</Text>
        </View>
        
        <View>
        <TextInput style={label === 'Comentario' ? styles.textArea : styles.input } multiline={label === 'Comentario' ? true : false}  numberOfLines={10}/>
        </View>
      </View>
    </>
  )
}


let Survey = props => {
/* 
const {handleSubmit} = props */

const handleSubmit = (valueP) => {
  Alert.alert("Mis valores props handleSubmit son ",valueP)
}

    return (
    <>
          <View style={{flex: 1, flexDirection:'column',margin:40,justifyContent:'flex-start'}}>
            <Text style={styles.titleForm}>Formulario</Text>
            
            <Field label='Nombre' component={renderField} name={"nombre"} />
            <Field label='Telefono' component={renderField} name={"telefono"} />
            <Field label='Comentario' component={renderField} name={"comentarios"} />

       <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
       
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.buttonSubmit}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Clikeaste Cancel")} style={styles.cardButton}>
            <Text style={styles.buttonCancel}>Cancel</Text>
          </TouchableOpacity>
       
          </View>
      </View>
    </>
    )
  }
  
  Survey = reduxForm({
    form: 'survey'
  })(Survey) 

  const styles = StyleSheet.create({
  textArea:{
    
    height:80,
    padding:10,
    marginTop:15,
    width:220,
    textAlignVertical: 'top',
    borderColor:'steelblue',
    borderWidth:2,
    marginTop:40,
    borderRadius:10 
  },
  
  input:{
    borderColor:'steelblue',
    borderWidth:2, 
    height:37, 
    width:220, 
    padding:5,
    paddingTop:10,
    borderRadius:10 
    },

    buttonCancel:{
      color:'white',
      fontSize:15,
      padding:10,
      height:36,
      borderRadius:10,
      width:140, 
      overflow:'hidden',
      backgroundColor:'red',
      textAlign:'center',
    },
    buttonSubmit:{
      color:'white',
      fontSize:15,
      padding:10,
      height:36,
      borderRadius:10,
      width:140, 
      overflow:'hidden',
      backgroundColor:'steelblue',
      textAlign:'center',
      marginRight:10,
    },
    titleForm:{
      fontSize:30, 
      fontWeight:'bold', 
      width:200, 
      textAlign:'center',
      margin:40, 
      fontFamily:'Orbitron-Regular'
    },
    cardButton:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:70,
    }
  })


  export default Survey


