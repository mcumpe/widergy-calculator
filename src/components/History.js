import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import Card from '../components/Card'
import { deleteExpression } from '../Redux/Actions/operationActions'
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


const History = ({navigation},props) => {

  const listExpression = useSelector(store => store.opRed.expression)
  const dispatch =  useDispatch()

  const deleteAll = () => {
    dispatch(deleteExpression())
    Alert.alert("Has limpiado el historial")
  }
 
  return (
    <>
       <Button title="Ir a Home" 
       onPress={() => navigation.navigate('Home')}/>

    <TouchableOpacity style={styles.cardButtons} onPress={() => deleteAll()}>
                <Text style={styles.delete}>DELETE ALL</Text>
    </TouchableOpacity>

          
          {listExpression.map((results, index)=> {
            return <Card valor={listExpression[index].operation}
                         id={listExpression[index].id}/>
          })}       
    </>
    )
  }

  const styles = StyleSheet.create({
  delete:{
    color:'white',
    fontSize:15,
    padding:10,
    height:36,
    borderRadius:10,
    width:200, 
    overflow:'hidden',
    backgroundColor:'red',
    textAlign:'center',
 },

 cardButtons:{
  flexDirection:'row',
  justifyContent:'center',
  marginTop:15
 },
})
 

export default History
