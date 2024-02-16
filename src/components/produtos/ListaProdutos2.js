import React, { useState } from 'react'
import { FlatList, Text } from 'react-native'
import Estilo from '../estilo'
import produtos from './Produtos'

export default props => {

    const produtoRender = ({ item: p }) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
            <Text style={Estilo.textoGrande}>
                Lista de Produtos:
            </Text>
            <FlatList
                keyExtractor={i => i.id}
                data={produtos}
                renderItem={produtoRender} />
        </>
    )
}