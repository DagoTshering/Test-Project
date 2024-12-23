import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'

const Props = () => {
    const [count,setCount] = useState(0);
    const [num,setNum] = useState(10);
    const changeNum = () => {
        setNum(num*10);
    }
  return (
    <View>
      <Text style={{fontSize: 30}}>Props</Text>
      <Text style={{fontSize: 15}}>It is used to send data(State) from the parent component to the child componenet</Text>
      <Button title='Increment' onPress={() => setCount(count+1)}/>
      <Button title = 'multiple' onPress={changeNum}/>
      <Child data = {count} num ={num}/>
    </View>
  )
}

export default Props