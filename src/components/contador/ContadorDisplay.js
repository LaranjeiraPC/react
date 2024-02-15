import React from 'react' 
import { StyleSheet, Text, View } from 'react-native' 
import Estilo from '../estilo' 

export default props => {
    return (
        <View>
            <Text style={[Estilo.textoGrande, style.DisplayText, style.Display]}>
                {props.num}
            </Text>
        </View> 
   )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: '#FFF'
    }
})