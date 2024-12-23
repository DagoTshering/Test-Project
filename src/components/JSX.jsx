import { View, Text } from 'react-native'
import React from 'react'
// jsx allow us to integrate html and javascript in a single line.
// Previously DOM is used to integrate html and js.
// HTML DOM is a standard for how to get,change,add,or delete HTML elements.
// jsx satands for Javascript syntax extension.
// Only javascript's expression(which return some values) can be executed in JSX but we cannot execute JS statements(eg., conditional statement,loop,funton defination,etc.)

const JSX = () => {
  let data = "JSX stands for Javascript Syntax Extension";
  const info = () => {
    return "JSX is one of unique feature of React"
  }
  return (
    <View>
      <Text style={{fontSize: 30}}>{data}</Text>
      <Text style={{fontSize: 30}}>{info()}</Text>
    </View>
  )
    
}

export default JSX