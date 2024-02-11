import React from "react"
import { View, StyleSheet } from "react-native"

import DefaultComponente, { ComponenteUm, ComponenteDois } from './components/Multi'
import Primeiro from './components/Primeiro'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Pai from './components/direta/pai'

export default () => (
    <View style = {style.App}>
      
     <Pai />
      
        {/* 
         <Contador inicial={100} passo={13} />
        <Botao />
        <Titulo principal ="Cadastro Produto" secundario = "Tela de cadastro do produto="></Titulo>
        <Aleatorio min="1" max="60" />
        <MinMax min="3" max="20"/>
        <DefaultComponente />
        <ComponenteUm />
        <ComponenteDois />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})
