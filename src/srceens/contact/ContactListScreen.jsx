import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { users } from './userContactInfo'
import ContactItem from '../../components/ContactItem'
import { styles } from './style'
/**
 * This is the best practice to create different screens of your application.
 * You can display the list item using seperate component, making your code reusable
 */

const ContactListScreen = () => {
    const renderItem = ({item}) => <ContactItem name={item.name} email= {item.email}/>
  return (
    <FlatList
    data={users}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    ListHeaderComponent={<Text style={styles.heading}>Contacts</Text>}
    contentContainerStyle={styles.list}
    />
  )
}

export default ContactListScreen