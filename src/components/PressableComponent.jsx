import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
/**
 * If you want to use multiple event listner, you have to use Pressable component to create button
 * When you use both onPress and onLongPress event listener, either onPress or onLongPress will be executed
 * depending on user clicking senario.
 * 
 */
const PressableComponent = () => {
    const onPress = () => {
        console.log('onPress');
    };
    const onPressIn = () => {
        console.log('onPressIn');
    };
    const onPressOut = () => {
        console.log('onPressOut');
    };
    const onLongPress = () => {
        console.log('onLongPress');
    };
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressableBotton} onPressIn={onPressIn} onPressOut={onPressOut} onLongPress={onLongPress} onPress={onPress} delayLongPress={5000}>
        <Text style={styles.bottonText}>Press Me</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressableBotton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#06768d',
        borderRadius: 10,
        shadowColor:'#000',
        elevation: 5,
    },
    bottonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    }
});

export default PressableComponent