import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

export default function StylesPractice() {
    //the numbers component
    return (
        <>
            <View style={styles.parent}>
                <SafeAreaView style={styles.main}>
                    <TouchableOpacity>
                        <Text style={styles.container}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.container}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.container}>3</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={styles.main}>
                    <TouchableOpacity>
                        <Text style={styles.container}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.container}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.container}>6</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={styles.main}>
                    <TouchableOpacity>
                        <Text style={styles.container}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.container}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.container}>9</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 50,
        backgroundColor: "teal",
        paddingTop: 20,
        paddingLeft: 33,
        height: 100,
        width: 100,
        borderRadius: 100
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'space-around'
    },
    parent: {
        display: "flex",
        paddingTop: 250
    }
});
