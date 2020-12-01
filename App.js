import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import History from './src/components/History' 
import Calculator from './src/components/Calculator'

const Stack = createStackNavigator();


const App = () => { 
  return (
    <>
     
     <NavigationContainer>
          <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#18152a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            
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
   
   </>
  );
};


export default App;






