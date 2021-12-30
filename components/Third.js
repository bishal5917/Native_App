import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Switch } from 'react-native'

export default function Third() {
    const [val, setVal] = useState(false)

    return (
        <View style={styles.major}>
            <Switch value={val}
                onValueChange={(newValue) => setVal(newValue)} />
            <TextInput style={styles.text} placeholder="Enter Your Name"></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    major: {
        padding: 24
    },
    text: {
        backgroundColor: "wheat",
        padding: 10,
        fontSize: 20,
        color: "white",
        borderRadius: 20

    }
});
