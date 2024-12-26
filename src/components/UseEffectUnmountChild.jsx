import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const UseEffectUnmountChild = () => {
    // This is called when child component is mounted, we don not want that.
    // useEffect(() => {
    //     console.log('Child component mounted!');
    // }, []);

    // This is called when child component is unmounted using the return ().
    useEffect(() => {
        return() => {
            console.log('Child component unmounted!')
        }
    }, []);
  return (
    <View>
      <Text style={{fontSize: 25, padding: 15}}>UseEffect Unmount Child</Text>
    </View>
  )
}

export default UseEffectUnmountChild