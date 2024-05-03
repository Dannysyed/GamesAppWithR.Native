import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const GameScreen = () => {
    let route = useRoute()

    return (
        <View>
            <Text>{route.params.data}</Text>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({})