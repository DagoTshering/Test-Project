import { View, Text, Button, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
/**
 * We cannot style the button component, it has limited styling properties.
 * Touchable opacity is used when user need a smooth transition.
 * Touchable highlight is used when you want to notify the user or provide a clear message.
 * Touchable highlight button can be only press if there is onPress method.
 */

const StyleWithButton = () => {
  return (
    <View>
      <Button title='basic Button' color={'red'}/>
      <TouchableOpacity style= {styles.touchableButton} activeOpacity={0.7}>
        <Text style={styles.buttonText}> 
            Touchable Opacity
        </Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.touchableButton} underlayColor={'#00CDB6'} onPress={() => {
        console.log('Button clicked!');
      }}>
        <Text style={styles.buttonText}>
            Touchable Highlight
        </Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
    touchableButton: {
        backgroundColor: '#090088',
        margin: 20,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },

});

export default StyleWithButton