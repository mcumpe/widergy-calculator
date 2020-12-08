import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, FlatList, TouchableOpacity, TextInput,Alert } from 'react-native';
import {Field, reduxForm } from 'redux-form'


const renderField = ({label}) => {
return (<View style={{flexDirection:'row', height:50, alignItems:'center'}}>
  <Text style={{fontSize:14, fontWeight:'bold', width:80}}>{label}</Text>
    <TextInput style={{borderColor:'steelblue',borderWidth:1, height:37, width:220, padding:5}}>

    </TextInput>
  </View>)
}



let Survey = props => {
 const { handleSubmit } = props

    return (
    <>
      

          <View style={{flex: 1, flexDirection:'column',margin:40,justifyContent:'flex-start'}}>
            <Text style={{fontSize:20, fontWeight:'bold', width:200, textAlign:'center',margin:10, fontFamily:'Orbitron-Regular'}}>Encuesta Calculadora</Text>
            
            <Field label='Name' component={renderField} name={"nombre"}  />
            <Field  label='Email' component={renderField} name={"Email"} />


<TouchableOpacity onPress={handleSubmit} style={{margin:10, alignItems:'center'}}>
<Text style={{backgroundColor:'steelblue',color:'white',fontSize:16,height:37, width:200, textAlign:'center',padding:10 }}>Submit</Text>
</TouchableOpacity>
          </View>

      
    </>
    )
  }
  
  Survey = reduxForm({
    form: 'survey'
  })(Survey) 

  export default Survey