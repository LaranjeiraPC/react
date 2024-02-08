import React from "react";
import { Text } from "react-native";
import Estilo from './estilo'

export default function Componente() {
    return <Text style={Estilo.textoGrande}>Componente #Oficial</Text>
}

export function ComponenteUm() {
    return <Text style={Estilo.textoGrande}>Componente #01</Text>
}

export function ComponenteDois() {
    return <Text style={Estilo.textoGrande}>Componente #02</Text>
}

//export {Componente, ComponenteUm, ComponenteDois}