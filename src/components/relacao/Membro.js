import React, { useState } from 'react' 
import { Text } from 'react-native' 
import Estilo from '../estilo' 

export default props => {
    return (
        <Text style={Estilo.textoGrande}>
            {props.nome} {props.sobrenome}
        </Text>
   )
}