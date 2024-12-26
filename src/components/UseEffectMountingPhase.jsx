import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
/**
 *The are three life cycle methods in React and React-Native
 *1.Mounting phase, 2.Updating phase, 3.Unmounting phase
 *In class based components, the life cycles methods are alredy build in.
 *But in fuctional based component, three life cycle methods can be implemented using useEffect hook
 *Mounting phase is usaually used to get data from API before the UI is rendered
 */

const UseEffectMount = () => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        console.log('Component mounted!')
    },[]);
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 15,}}>UseEffect Mounting Phase</Text>
      <Text style={{fontSize: 20, marginBottom: 15, paddingHorizontal: 10,}}>Count: {count}</Text>
      <Button title='Count Increment' onPress={() => setCount(count + 1)}/>
    </View>
  )
}

export default UseEffectMount