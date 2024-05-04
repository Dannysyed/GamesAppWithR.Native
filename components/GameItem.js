import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameItem = (props) => {
    return (

        <View style={styles.container}>
            <Text>{props.title}</Text>
        </View>

    )
}

export default GameItem

const styles = StyleSheet.create({

    container: {
        height: 100,
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 10
    },
});
