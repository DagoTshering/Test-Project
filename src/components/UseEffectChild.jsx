import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const UseEffectChild = ({count, num}) => {
    useEffect (() => {
        console.log('I am Child Component!');
    },[count]);
    useEffect (() => {
        console.log('I am Child Component!');
    },[num]);

  return (
    <View>
      <Text style={{fontSize: 25, textAlign: 'center', marginVertical: 15,}}>UseEffect Child Component</Text>
      <Text style={{fontSize: 20, marginBottom: 15, paddingHorizontal: 10,}}>Count: {count}</Text>
      <Text style={{fontSize: 20, marginBottom: 15, paddingHorizontal: 10,}}>Num: {num}</Text>
    </View>
  )
}

export default UseEffectChild