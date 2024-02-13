import React, { useState } from "react"
import { Button, Text } from 'react-native'
import Estilo from './estilo'

export default ({ inicial = 0, passo = 1}) => {
    const [numero, setNumero] = useState(inicial)

    const incremento = () => setNumero(numero + passo)
    const decremento = () =>  setNumero(numero - passo)

    return (
        <>
            <Text style={Estilo.textoGrande}>{numero}</Text>
            <Button title="+" onPress={incremento}></Button>
            <Button title="-" onPress={decremento}></Button>
        </>
    )
}