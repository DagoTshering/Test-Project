import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import SecondComponent from './SecondComponent'

class ClassComponent extends Component {
    constructor () {
        super();
        this.state = {
            age: '21',
        };
    }
    setAge = () =>{
        this.setState({
            age: '22',
        });
    }
  render() {
    return (
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>ClassComponent</Text>
        <SecondComponent data={this.state.age}/>
        <Button title='Update Age' onPress={this.setAge}/>
      </View>
    )
  }
}

export default ClassComponent