import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { useState } from 'react';
// import { useDeviceOrientation } from '@react-native-community/hooks'

export default function First() {
    //view  is like div in react native
    //another one in SafeAreaView that makes sure that the text is in view area

    const [value, setvalue] = useState(false)

    const clickhandler = () => {
        value ? setvalue(false) : setvalue(true)
    }
    return (
        <View style={styles.container}>
            <Text numberOfLines={1}>This is fun and awesome and aweosme and awesome and aweosme and </Text>
            <Text>Lets go Further</Text>
            <Image source={{
                width: 300, height: 300,
                uri: "https://picsum.photos/200/300?random=2"
            }}></Image>
            <StatusBar style="auto" />
            <Button color="tomato" title="Click Me" onPress={clickhandler} />
            {value && <Text>I am Clicked</Text>}
            <Button color="tomato" title="Submitted" onPress={Alert.alert("Message",
                "Your Button was Clicked")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

