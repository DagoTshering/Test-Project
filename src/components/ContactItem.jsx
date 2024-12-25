import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../srceens/contact/style'
/**
 * The component can have parameter in form of object or destructured object while using Props
 * object: props
 * Accessing {props.name} {props.email}
 * Destructured object: {name, email}
 * Accesiing {name} {email}
 * Both can be used
 */
const ContactItem = ({name, email}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  )
}

export default ContactItem