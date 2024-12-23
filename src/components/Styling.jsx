import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../style/styles'

/*
If you apply all three styling in single component,
inline stlying will be applied as it has the highest 
precedent.
Using external styling is the best practices as it can be 
applied across many components.

 */
const Styling = () => {
  return (
    <View>
      <Text style={{fontSize: 30, backgroundColor: 'red', borderWidth: 3, borderColor: 'yellow', margin: 10, textAlign:'center',padding:8}}> Inline Styling</Text>
      <Text style={style.text}>Internal Styling</Text>
      <Text style={styles.text}>Internal Styling</Text>
      <Text style={[style.text,styles.text,{fontSize: 30, backgroundColor: 'orange', borderWidth: 3, borderColor: 'red', margin: 10, textAlign:'center',padding:8}]}>Mixed Styling</Text>
    </View>
  )
}

const style = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor: 'green',
    borderWidth: 3,
    textAlign: 'center',
    margin: 10,
    padding:8,
    borderColor: 'purple'
  },

});

export default Styling