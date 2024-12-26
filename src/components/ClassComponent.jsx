import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import SecondComponent from './SecondComponent'
/**
 * Methods are the function defined within the class and object and can be called using them.
 * Function are independent of class and object
 * Class based and fuction based component can be used together
 */

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