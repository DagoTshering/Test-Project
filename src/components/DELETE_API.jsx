import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const DELETE_API = () => {
    const [id, setId] = useState('');
    const handleDelete= async() => {
        try {
            //const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`);
            Alert.alert(
                'Delete',
                'Are you sure you want to delete?',
                [
                    {
                        text : 'delete',
                        onPress : async() => {
                            const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`);
                        },
                        style : 'destructive',

                    },
                    {
                        text : 'cancel',
                        style : 'cancel',
                        
                    },
                ],
                {cancelable: false},

            );
            setId('');
        } catch (error) {
            Alert.alert('Error, Sorry umable to delete!');
        }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>DELETE_API</Text>
      <TextInput placeholder='Enter id'placeholderTextColor={'#ccc'} style={styles.inputField} onChangeText={(value) => setId(value)} value={id}/>
      <Button title='delete' color={'green'} onPress={handleDelete}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 10,
    
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
export default DELETE_API