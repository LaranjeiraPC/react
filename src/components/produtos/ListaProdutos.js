import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import produtos from './Produtos'

export default props => {

    function obterLista() {
        return produtos.map(p => {
            return (
                <Text key={p.id}>
                    {p.id}) {p.nome} - Preço {p.preco}
                </Text>
            )
        })
    }

    return (
        <>
            <Text style={Estilo.textoGrande}>
                Lista de Produtos:
            </Text>
            {obterLista()}
        </>
    )
}