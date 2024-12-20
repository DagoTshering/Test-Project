import { View, Text, Button } from 'react-native' // we want to import multiple components from a module, we have to use {} bracket
import React from 'react'
import First from './src/components/First'

const App = () => {
  return (
    <View>
      <First/>
      <Text style={{fontSize: 30}}>This is my first React App</Text>
      <Button title='Press Me'/>
    </View>
  )
}

export default App