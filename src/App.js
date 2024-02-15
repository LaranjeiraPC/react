import React from "react"
import { View, StyleSheet, SafeAreaView } from "react-native"

import DefaultComponente, { ComponenteUm, ComponenteDois } from './components/Multi'
import Primeiro from './components/Primeiro'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Familia from './components/relacao/Familia'
import ContadorV2 from "./components/contador/ContadorV2"
import Diferenciar from "./components/Diferenciar"
import ParImpar from "./components/ParImpar"
import Membro from "./components/relacao/Membro"
import UsuarioLogado from "./components/UsuarioLogado"

export default () => (
    <SafeAreaView style = {style.App}>
     
     <UsuarioLogado usuario={ {nome: "Gui", email: "gui@gui.com.br"} }/>
     <UsuarioLogado usuario={ {nome: "Leo"} }/>
     
        {/* 
        <Familia>
            <Membro nome="Bia" sobrenome="Calabresa"/>
            <Membro nome="Carlos" sobrenome="Calabresa"/>
        </Familia>
        <Familia>
            <Membro nome="Bob" sobrenome="Morango"/>
            <Membro nome="Danda" sobrenome="Morango"/>
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar />
        <ContadorV2 /> 
         <Pai />
        <Pai />
         <Contador inicial={100} passo={13} />
        <Botao />
        <Titulo principal ="Cadastro Produto" secundario = "Tela de cadastro do produto="></Titulo>
        <Aleatorio min="1" max="60" />
        <MinMax min="3" max="20"/>
        <DefaultComponente />
        <ComponenteUm />
        <ComponenteDois />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})
