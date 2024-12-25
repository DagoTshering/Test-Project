import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

// Button component cannot be styled so we use TouchableOpacity for customized button

const LoginForm = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

const handleLogin = () => {
    console.log('Email: ', email);
    console.log('Password: ', password);
    setEmail('');
    setPassword('');
}

  return (
    <View>
      <Text style={styles.heading}>Login</Text>
      <TextInput 
      placeholder='Enter your username or email' 
      style={styles.textInput}
      keyboardType='email-address'
      autoCapitalize='none'
      placeholderTextColor='#999'
      value={email}
      onChangeText={(data) => setEmail(data)}
      />
      <TextInput 
      placeholder='Enter your passaword' 
      style={styles.passwordInput}
      secureTextEntry
      placeholderTextColor='#999'
      onChangeText={setPassword}
      value={password}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },
    textInput: {
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#f8f8f8',
        margin: 15,
    },
    passwordInput: {
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#f8f8f8',
        margin: 15,
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical:15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 15,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff',
    },

})

export default LoginForm