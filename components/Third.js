import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function Third() {
    return (
        <View style={styles.major}>
            <TextInput style={styles.text} placeholder="Enter Your Name"></TextInput>
        </View>
    )
}


const styles = StyleSheet.create({
    major: {
        padding: 24
    },
    text: {
        backgroundColor: "teal",
        padding: 10,
        fontSize: 20,
        color: "white",
        borderRadius: 20

    }
});
