
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text,TouchableOpacity ,Alert } from 'react-native';
import {Field, reduxForm, destroy } from 'redux-form'
import { connect, useDispatch } from 'react-redux';
import {saveUser}  from '../Redux/Actions/operationActions'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import RenderField from '../components/RenderField'
import {required, checkTel, checkUser, telLength ,checkFields} from '../components/Validations'



let Survey  = (props) => {
  
  const [userName ,setUserName] = useState('')
  const [cell ,setCell] = useState('')
  const [comment ,setComment] = useState('')


  const {handleSubmit} = props 
  const navigation = useNavigation();
  const dispatch = useDispatch() 
 
  

  const submit = async (values) => {
    
    if(!checkFields(userName,cell,comment)){
      Alert.alert("Tiene que llenar todos los campos")
      return 0
    
    }else{

    const keyResponse = { input_values: { values } };
    const response = await axios.post('https://private-e75208-formresponse.apiary-mock.com/form_response', keyResponse);
    if(response != null){
      Alert.alert("¡Gracias por el mensaje!")
    }
  }
}

  const handleOnChange = (user) => {
    setUserName(user)
  }

  const savePhone = (user) => {
    setCell(user)
  }
  
  const saveComment = (user) => {
    setComment(user)
  }

  
  const destroyForm = () => {
    dispatch(saveUser(userName))         
    destroy('survey')
    navigation.navigate({name:'Home'})     
  }

 /*  console.log(userName, cell, comment) */

       

    return (
    <>
       <SafeAreaView style={{ flex: 1, backgroundColor: '#19191b' }}>
        <ScrollView>
          <View style={{flex: 1, flexDirection:'column',margin:40,justifyContent:'flex-start'}}>
            <Text style={styles.titleForm}>Formulario</Text>
            
            <Field label='Usuario' component={RenderField} name={"userName"} validate={[required, checkUser]} onChange={handleOnChange}/>
            <Field label='Telefono' component={RenderField} name={"telefono"} validate={[required, checkTel, telLength]} onChange={savePhone}/>
            <Field label='Comentario' component={RenderField} name={"comentarios"} validate={required} onChange={saveComment}/>

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


