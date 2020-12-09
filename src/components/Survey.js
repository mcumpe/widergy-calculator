import { NONE } from 'apisauce';
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, FlatList, TouchableOpacity, TextInput,Alert } from 'react-native';
import {Field, reduxForm, reset, destroy ,change} from 'redux-form'
import { connect, useDispatch, useSelector } from 'react-redux';
import {saveUser}  from '../Redux/Actions/operationActions'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import AwesomeAlert from 'react-native-awesome-alerts';
 

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
    if (value && /[^a-zA-Z ]/i.test(value)){
      return '¡Solo se permiten letras!';
    }
  }

const telLength = value => value && value.length > 10 ? "El telefono debe tener 10 caracteres o menos" : undefined

//Funciones de Validaciones






const renderField = ({label,meta:{ touched, error, warning },input,  input: { onChange, ...restInput }}) => {
const [flag, setFlag] = useState(false)
/* --------------------> BORRAR         const store = useSelector(store => store.opRed.userName)             <--------------------  BORRAR*/
  

return (
    <>
      <View style={{flexDirection:'row',height:50, alignItems:'center'}}>
        <View>
        <Text style={{fontSize:14, fontWeight:'bold', width:80,color:'white'}}>{label}:</Text>
        </View>
        
        <View>
        <TextInput style={label === 'Comentario' ? styles.textArea : styles.input } 
        multiline={label === 'Comentario' ? true : false}  
        numberOfLines={10} 
        onChangeText={onChange} {...restInput} 
        value={input.value}
        
        />
         {touched && ((error && <Text style={{color: 'red',fontSize:10}}>{error}</Text>) ||
          (warning && <Text style={{color: 'orange'}}>{warning}</Text>))}
        </View>
      </View>
    </>
  )
}





/* ¡------------------------------------------ Funcion Encuestra -------------------------------------------------! */
let Survey  = (props) => {
  
  const [userName ,setUserName] = useState('')
  const [message, setMessage] = useState('')

  const {handleSubmit} = props 
  const navigation = useNavigation();
  const dispatch = useDispatch() 
 
  

  const submit = async (values) => {
    const keyResponse = { input_values: { values } };
    const response = await axios.post('https://private-e75208-formresponse.apiary-mock.com/form_response', keyResponse);
    if(response != null){
      Alert.alert("¡Gracias por el mensaje!")
    }
  }

  const handleOnChange = (user) => {
    setUserName(user)
  }
  
  const destroyForm = () => {
    dispatch(saveUser(userName))         
    destroy('survey')
    navigation.navigate({name:'Home'})     
  }



    return (
    <>
       <SafeAreaView style={{ flex: 1, backgroundColor: '#19191b' }}>
        <ScrollView>
          <View style={{flex: 1, flexDirection:'column',margin:40,justifyContent:'flex-start'}}>
            <Text style={styles.titleForm}>Formulario</Text>
            
            <Field label='Usuario' component={renderField} name={"userName"} validate={[required, checkUser]} onChange={handleOnChange}/>
            <Field label='Telefono' component={renderField} name={"telefono"} validate={[required, checkTel, telLength]}/>
            <Field label='Comentario' component={renderField} name={"comentarios"} validate={required} />

       <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
       
          <TouchableOpacity style={styles.cardButton} onPress={handleSubmit(submit)}>
            <Text style={styles.buttonSubmit}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={destroyForm} style={styles.cardButton}>
            <Text style={styles.buttonCancel}>Cancel</Text>
          </TouchableOpacity>
       
          </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    </>
    )
  }
  
  Survey = reduxForm({
    form: 'survey',
    enableReinitialize: true,
  })(Survey) 

   Survey = connect(
    state => ({
      initialValues: state.opRed,
      storeUserName: state.opRed.userName,
  }))(Survey); 
 

  
  const styles = StyleSheet.create({
  textArea:{
    
    height:80,
    padding:10,
    marginTop:15,
    width:220,
    textAlignVertical: 'top',
    borderColor:'steelblue',
    borderWidth:1,
    marginTop:40,
    borderRadius:10,
    backgroundColor:'#B5D3D2' 
  },
  
  input:{
    borderColor:'steelblue',
    borderWidth:1, 
    height:37, 
    width:220, 
    padding:5,
    paddingTop:10,
    borderRadius:10,
    backgroundColor:'#89DCF5' 
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
      fontFamily:'Orbitron-Regular',
      color:'white'
    },
    cardButton:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:70,
    }
  })


  export default Survey


