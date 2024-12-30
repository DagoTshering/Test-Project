import { View, Text, TextInput, Alert, StyleSheet, Button} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const PATCH_API = () => {
  const [formData, setFormData] = useState({id: '', name: '', email: ''});
  const handleInput = (field,value) => {
    setFormData({...formData, [field]: value});
  }
  const handleUpdate = async () => {
    try {
      const response = await axios.patch(`http://10.0.2.2:3000/users/${formData.id}`, {
        ...formData.name && {name: formData.name},
        ...formData.email && {name: formData.email},
      });
      Alert.alert('Sucess', 'Registration sucessful!');
      setFormData({id: '', name: '', email: ''});
    } catch (error) {
      Alert.alert('Error', 'Registration failed!');
    }
  }
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>PUT_API</Text>
        <TextInput 
        placeholder='Enter ID'
        value={formData.id}
        placeholderTextColor={'#888'} 
        style= {styles.inputField}
        onChangeText={(value) => handleInput('id', value)}
        />
        <TextInput 
        placeholder='Enter your name' 
        placeholderTextColor={'#888'} 
        style= {styles.inputField}
        onChangeText={(value) => handleInput('name', value)}
        value={formData.name}
        />
        <TextInput 
        placeholder='Enter your email' 
        placeholderTextColor={'#888'}
        style= {styles.inputField}
        onChangeText={(value) => handleInput('email', value)}
        value={formData.email}
        />
        <Button title='update' color={'green'} onPress={handleUpdate}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        color: 'green',
        marginBottom: 20,
    },
    inputField: {
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        marginBottom: 15,
    },

});


export default PATCH_API