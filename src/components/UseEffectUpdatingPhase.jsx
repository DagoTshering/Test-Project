import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import UseEffectChild from './UseEffectChild';

const UseEffectUpdatingPhase = () => {
    const [count,setCount] = useState(0);
    const [num, setNum] = useState(1);
    // useEffect(() => {
    //     console.log('Component mounted!')
    // },[count, num]);
  return (
    <View>
        <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 15,}}>UseEffect Updating Phase</Text>
        <Text style={{fontSize: 20, marginBottom: 15, paddingHorizontal: 10,}}>Count: {count}</Text>
        <Text style={{fontSize: 20, marginBottom: 15, paddingHorizontal: 10,}}>Num: {num}</Text>
        <Button title='Count Increment' onPress={() => setCount(count + 1)}/>
        <Text></Text>
        <Button title='Multiply by 10' onPress={() => setNum(num * 10)}/>
        <UseEffectChild count={count} num={num}/>
    </View>
  )
}

export default UseEffectUpdatingPhase