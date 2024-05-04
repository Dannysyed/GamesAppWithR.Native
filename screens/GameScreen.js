import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const GameScreen = () => {
    let route = useRoute()
    let guessNumber = route.params.data

    return (
        <View style={styles.container}>
            <Text style={styles.text}>The guessed number is:{guessNumber}</Text>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1

    }, text: {
        color: 'white'
    }

})