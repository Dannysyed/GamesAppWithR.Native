import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Secondary_color, calming } from './Colors'

const PrimaryButton = ({ children, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: calming.secondary,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
})
