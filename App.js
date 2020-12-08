import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux'

import History from './src/components/History' 
import Calculator from './src/components/Calculator'
import Survey from './src/components/Survey'

import rootReducer from './src/Redux/Reducers/rootReducer';
import thunk from 'redux-thunk';
/* import { Form } from 'redux-form'; */

const myStore = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator();


const App = () => { 
  return (
    <>
     <Provider store={myStore}>
        <NavigationContainer>
          <Stack.Navigator

          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color:'white'
            },
          }}>
          
          <Stack.Screen  
             name="Formulario"
             options={{
             title:'FORMULARIO',
           }}
           component={Survey} 
           />

          <Stack.Screen  
             name="Home"
             options={{
             title:'CALCULADORA',
           }}
           component={Calculator} 
           />

          <Stack.Screen  
            name="History" 
            options={{
            title:'HISTORIAL',
          }}
          component={History} 
         /> 

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
   </>
  );
};


export default App;






