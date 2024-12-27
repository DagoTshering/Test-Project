import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
/**
 * useRef is a powerful hook in React and React Native for managing references and mutable values without causing re-renders. 
 * It is commonly used for directly interacting with DOM elements (or components in React Native) and storing persistent data 
 * that doesn’t need to trigger a re-render.
 * 1. In React Native, you might use useRef to reference components (e.g., TextInput or View) to interact with them directly, 
 * like focusing on a TextInput when a button is clicked.
 * 2. useRef is useful for storing values that do not need to trigger a re-render when updated, like timers, previous state,
 * or tracking user interactions.
 * 
 */
const UseRefHook = () => {
    const myRef = useRef();
    const handleRef = () => {
        myRef.current.setNativeProps({
            backgroundColor: 'lightgreen',
            borderColor: 'green',
            text: 'Dago Tshering',
        });
        myRef.current.focus();
    }
  return (
    <View style={styles.container}>
        <TextInput placeholder='Enter your Name' placeholderTextColor={'#999'} style={styles.input} ref={myRef}/>
        <TouchableOpacity style={styles.botton} onPress={handleRef}>
            <Text style={styles.bottonText}>
                Submit
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        width: '100%',
        height: 55,
        borderWidth: 3,
        marginBottom: 20,
    },
    container: {
        backgroundColor: '#f0f0f0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    botton: {
        backgroundColor: '#ff8503',
        width: '100%',
        borderRadius: 10,
        padding: 15,
    },
    bottonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },

});

export default UseRefHook