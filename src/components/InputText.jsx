import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const[name,setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30, margin:10}}>InputText</Text>
      <Text style={{fontSize:20, margin:10}}>The onchangeText event listenner by default passes a arguement that stores the changes happened inside it. The name of argument can be kept as per your choice.</Text>
      <Text style={{fontSize:25, margin:10}}>{name}</Text>
      <TextInput style={{fontSize: 20, borderWidth: 3, borderColor: 'black', margin:10}} placeholder='Enter your UserName'  value = {name} onChangeText={(data) => setName(data)}/>
      <Button title='Clear' onPress={() => setName('')}/>
    </View>
  )
}

export default InputText