import React,{useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
    const [show,setShow]=useState(false)
    const onPressLogin=()=>{

    }
    return (
        <View style={styles.container}>
            <Ionicons name="person-circle-sharp" size={94} color="white" />
            <Text style={styles.login}>Login</Text>
            <View style={styles.inputCont}>
                <TextInput style={styles.text} placeholder="Username"></TextInput>
                <TextInput style={styles.text} placeholder="Password"></TextInput>
            </View>
            <Text style={styles.forget}>Forget Password ?</Text>
            <View style={styles.loginBtn}>
            <Button
                onPress={onPressLogin}
                fontSize="30"
                color= "teal"
                title="Submit"
            />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002633',
        alignItems: "center",
        justifyContent: 'center',
    },
    forget: {
        color: "tomato",
        margin: 5

    },
    login: {
        fontSize: 50,
        color: "teal"
    },
    text: {
        backgroundColor: "white",
        padding: 10,
        fontSize: 20,
        color: "white",
        borderRadius: 10,
        width: 300,
        margin: 7
    },
    inputCont: {
        marginTop: 50
    },
    loginBtn:{
        width: 315,
        padding: 10,
        borderRadius: 10,
    }
});
