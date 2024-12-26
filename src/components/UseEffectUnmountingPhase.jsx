import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import UseEffectUnmountChild from './UseEffectUnmountChild';

const UseEffectUnmountingPhase = () => {
    const [value , setValue] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center',marginVertical: 15,}}>UseEffect Unmounting Phase</Text>
      {
        value ? <UseEffectUnmountChild/> : null
      }
      {/* <Button title='Hide' onPress={() => setValue(false)}/> */}
      <Button title='toggle' onPress={() => setValue(!value)}/>
    </View>
  )
}

export default UseEffectUnmountingPhase