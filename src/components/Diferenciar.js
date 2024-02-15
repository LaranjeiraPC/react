import React, { useState } from 'react' 
import { Text, Platform } from 'react-native' 
import Estilo from './estilo' 

export default props => {
    let texto = Text

    if(Platform.OS === 'android') {
        texto = 'Android'
    } else if (Platform.OS === 'ios') {
        texto = 'IOS'
    } else {
        texto = 'Eita'
    }

    return <Text style={Estilo.textoGrande}>{texto}</Text>
}