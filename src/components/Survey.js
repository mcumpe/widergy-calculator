import { NONE } from 'apisauce';
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, FlatList, TouchableOpacity, TextInput,Alert } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import {Field, reduxForm, reset, destroy } from 'redux-form'
import { connect } from 'react-redux';

//Funciones de Validaciones

const required = value => {
  value ? undefined : 'Required'
}

const checkTel = value => {
      if(value && isNaN(Number(value))){
           return "¡El telefono debe ser solo numeros!"
      }
   }

   const checkUser = value => {
    if (value && /[^a-zA-Z ]/i.test(value)) {
      return '¡Solo se permiten letras!';
    }
  };

const telLength = value => value && value.length > 10 ? "El telefono debe tener 10 caracteres o menos" : undefined

//Funciones de Validaciones

  




const renderField = ({label,meta:{ touched, error, warning },  input: { onChange, ...restInput }}) => {
const [flag, setFlag] = useState(false)



return (
    <>
      <View style={{flexDirection:'row',height:50, alignItems:'center'}}>
        <View>
        <Text style={{fontSize:14, fontWeight:'bold', width:80}}>{label}:</Text>
        </View>
        
        <View>
        <TextInput style={label === 'Comentario' ? styles.textArea : styles.input } 
        multiline={label === 'Comentario' ? true : false}  
        numberOfLines={10} 
        onChangeText={onChange} {...restInput} 
        />
         {touched && ((error && <Text style={{color: 'red',fontSize:10}}>{error}</Text>) ||
          (warning && <Text style={{color: 'orange'}}>{warning}</Text>))}
        </View>
      </View>
    </>
  )
}


const submit = (values) => {
  console.log(JSON.stringify(values))
}


/* ¡------------------------------------------ Funcion Encuestra -------------------------------------------------! */
let Survey = (props,) => {
  const [userName ,setUserName] = useState('')

  const handleOnChange = (user) => {
    setUserName(user)
  }
  
  const destroyForm = () => {
        /* destroy('survey') */
  /*       navigation.navigate('Home')  */
        
  }


const {handleSubmit} = props 

    return (
    <>
          <View style={{flex: 1, flexDirection:'column',margin:40,justifyContent:'flex-start'}}>
            <Text style={styles.titleForm}>Formulario</Text>
            
            <Field label='Usuario' component={renderField} name={"usuario"} validate={[required, checkUser]} onChange={handleOnChange}/>
            <Field label='Telefono' component={renderField} name={"telefono"} validate={[required, checkTel, telLength]}/>
            <Field label='Comentario' component={renderField} name={"comentarios"} validate={required} />

       <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
       
          <TouchableOpacity style={styles.cardButton} onPress={handleSubmit(submit)}>
            <Text style={styles.buttonSubmit}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={destroyForm()} style={styles.cardButton}>
            <Text style={styles.buttonCancel}>Cancel</Text>
          </TouchableOpacity>
       
          </View>
      </View>
    </>
    )
  }
  
  Survey = reduxForm({
    form: 'survey',
    enableReinitialize: true,
  })(Survey) 
    
  /* Survey = connect(state => ({
    initialValues: state.ReducerReduxForm,
    storeUserName: state.ReducerReduxForm.userName, 
  }))(Survey); */

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


