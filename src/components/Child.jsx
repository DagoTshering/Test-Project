import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
    console.log(props);
    let number = props.num;
  return (
    <View>
      <Text>Child</Text>
      <Text>{props.data}</Text>
      <Text>{number}</Text>
    </View>
  )
}

export default Child