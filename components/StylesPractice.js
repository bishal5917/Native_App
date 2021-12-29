import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, SafeAreaView } from 'react-native';

export default function StylesPractice() {
    return (
        <>
            <View>
                <View style={styles.container} />
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'teal',
        width: 100,
        height: 100,
        justifyContent: 'flex-end',
        borderRadius:50
    },
});
