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


const History = ({navigation}) => {
return (
    <>
      <Button title="Ir a Home" 
    onPress={() => navigation.navigate('Home')}/>
    </>
)
}
export default History