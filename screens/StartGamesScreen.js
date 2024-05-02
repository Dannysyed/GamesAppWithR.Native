import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Primary_color } from '../components/Colors'
import PrimaryButton from '../components/PrimarButton'
import { Ionicons } from '@expo/vector-icons'

const StartGamesScreen = () => {
    const [enteredNumber, setEnteredNumber] = useState('')
    let numberInputHandler = (text) => {
        setEnteredNumber(text)
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter your Number" placeholderTextColor={"white"} keyboardType='number-pad' onChangeText={numberInputHandler} />
            <View style={styles.buttonContainer}>
                <PrimaryButton style={styles.button}>Reset</PrimaryButton>
                <PrimaryButton style={styles.button}>Start</PrimaryButton>
                <Ionicons name='add' size={24} color={'white'} />
            </View>

        </View>
    )
}

export default StartGamesScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 16,
        marginHorizontal: 20,
        backgroundColor: Primary_color,
        borderRadius: 10
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
        color: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        marginHorizontal: 5
    }
})
