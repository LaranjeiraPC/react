import React, { useState } from 'react' 
import { Text } from 'react-native' 
import Estilo from './estilo' 
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.textoGrande}>Usuário Logado:</Text>
                <Text style={Estilo.textoGrande}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
   )
}