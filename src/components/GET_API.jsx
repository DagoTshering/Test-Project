import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

/**
     * There are two ways to implement HTTP methods
     * 
     * 1. We can use javascript fetch() method to implement all HTTP methods 
     * The fetch method take API url and return a promise, to resolve the promise we use then() method
     * which take a callback function. In side the callback function the json data is converted into javascript object
     * using json() method which also return a promise and to handle the promise we again use then () method.
     * 
     * 2. Third party library  Axios. The Axios automatically convert the json data into javascript object
     * 
     */

const GET_API = () => {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        // fetch('http://10.0.2.2:3000/users').then((response) => {
        //     response.json().then((result) => {
        //         console.log(result);
        //     });
        // });
        axios.get('http://10.0.2.2:3000/users').then((result) => {
            setData(result.data);
        });

    }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>GET_API</Text>
      {
        data.map((item) => (
            <View key={item.id} style={styles.listItem}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.email}</Text>
            </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
    },
    listItem: {
        backgroundColor: 'green',
        marginBottom: 15,
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    itemText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        color: 'green',
        textAlign: 'center',
        marginVertical: 20,
    },

});

export default GET_API