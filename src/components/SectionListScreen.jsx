import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const myArr = [
    {
        title: 'Fruits',
        count: 5,
        data: [
            {id: 1, name: 'Mango'},
            {id: 2, name: 'Orange'},
            {id: 3, name: 'Apple'},
            {id: 4, name: 'Banana'},
            {id: 5, name: 'Papaya'},
        ],
    },
    {
        title: 'Vegetables',
        count: 6,
        data: [
            {id: 6, name: 'Cabbage'},
            {id: 7, name: 'Onion'},
            {id: 8, name: 'Chilli'},
            {id: 9, name: 'Carrot'},
            {id: 10, name: 'Broccoli'},
            {id: 11, name: 'Cucumber'},

        ],
    },    

];

const SectionListScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
  const renderSectionHeader = ({section}) => (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.textHeader}>{section.title}</Text>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.textHeader}>{section.count}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <SectionList 
      sections={myArr}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item) => {item.id}}
      contentContainerStyle = {styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    paddingTop: 15,
  },
  list: {
    paddingHorizontal: 15,
  },
  item : {
    borderWidth: 5,
    borderColor: 'purple',
    backgroundColor: 'lightgreen',
    margin: 10,
    paddingVertical: 15,
  },
  sectionHeader: {
    borderWidth: 5,
    borderColor: 'lightgreen',
    backgroundColor: 'purple',
    margin: 10,
    paddingVertical: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },


});

export default SectionListScreen 