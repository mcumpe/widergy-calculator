# Calculadora Mobile

_Aplicación mobile desarrollada en el training de Widergy. Es una calculadora mobile, en la que podemos ejecutar operaciones aritmeticas basicas, cuenta con un historial donde se pueden guardar las operaciones. El historial cuenta con funcionalidades delete para poder borrar todo el historial, y un boton para borrar cada expresion en particular. Tambien cuenta con la posibilidad de editar las expresiones y actualizarlas con un boton._
_En otra pantalla se puede ver una pequeña encuesta, en el cual un usuario puede dejar una pequeña devolucion de la aplicacion registrandose con su nombre de usuario su telefono y un campo para poder dejar un comentario_

## Demo 📦

_Para ver una demo del proyecto desplegado, puedes ir a [Demo del proyecto]()_


### Instalación 🔧

# Instalar dependencias para el cliente
```
yarn install
```

## Comenzando 🚀
_Ingresar a la carpeta del repositorio_ 

_Luego ejecutar_
```
yarn start
yarn android
```

_Tras realizar estos pasos ya podrás visualizar el proyecto_


## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_
* [React Native](https://reactnative.dev/) - Framework utilizado
* [Redux](https://es.redux.js.org/) - Utilizado para trabajar con un estado global
* [Redux-Form](https://redux-form.com/8.3.0/) - Utilizado para trabajar con un estado general y manejo de formularios
* [Reactotron](https://github.com/infinitered/reactotron) - Intefaz grafica para monitorear el funcionamiento del redux 
* [Apiary](https://apiary.io/) - Herramienta para diseñar, crear prototipos, documentar y probar API de manera rapida

## Detalles del codigo_
_Los endpoints se ubican en la carpeta de actions ya los usamos para poder consumir las APIs y despachar las actions al reducer_
```
import axios from 'axios'
import { Alert } from 'react-native'

export const saveExpression = (id, operation) => {  
      return async (dispatch, getState) => {
        const response = await axios.post(`https://private-4de685-martincumpe.apiary-mock.com/operation`,{id:id, operation:operation})
        const info = response.data
        if(info != null){
      
        Alert.alert(
          '¡El metodo POST se ejecuto correctamente!',
          '¡La operacion se registro con EXITO!',
          [
             {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );    
      }

      dispatch({  
          type: 'SAVE_OPERATION',
            
            payload:{
              id:id,
              operation:operation
       }
    }); 
  }
}    
```

## Capturas del proyecto 
![Captura de pantalla de 2020-12-12 21-54-13](https://user-images.githubusercontent.com/62455807/102000288-d6353580-3cc4-11eb-8be1-3c1eff88ab91.png)
![Captura de pantalla de 2020-12-12 21-45-39](https://user-images.githubusercontent.com/62455807/102000214-d54fd400-3cc3-11eb-8f50-b7d3ac1baac3.png)
![Captura de pantalla de 2020-12-12 21-50-04](https://user-images.githubusercontent.com/62455807/102000253-54450c80-3cc4-11eb-8a7a-358d254875c9.png)


## Autores ✒️

_Proyecto realizado de manera individual_

* **Martin Cumpe** - *Autor*


## Licencia 📄

Todos los derechos reservados. 


## Expresiones de Gratitud 🎁

* Agradezco al equipo de Widergy, por la mentoria en mi proceso de capacitacion 🍺
