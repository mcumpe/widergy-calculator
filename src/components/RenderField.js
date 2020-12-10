
import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';


const RenderField = ({label,meta:{ touched, error, warning },input,  input: { onChange, ...restInput }}) => {

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
        })

    export default RenderField