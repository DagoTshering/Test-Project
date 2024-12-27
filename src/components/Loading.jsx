import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Loading = () => {
  const [Loading, setLoadiing] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setLoadiing(!Loading)}>
        <Text style={styles.buttonText}>{Loading? 'Hide Loader' : 'Show Loader'}</Text>
      </TouchableOpacity>
      {
        Loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={'#013220'} />
            <Text style={styles.loadeingText}>Loading...</Text>
          </View>
        )
      }   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Cover all the available space
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginBottom: 20,

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',

  },
  loadingContainer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: '#000',
    elevation: 5,
  },
  loadeingText: {
    marginTop: 15,
    fontWeight: '600',
    color: '#4CAF50',
  }
});

export default Loading