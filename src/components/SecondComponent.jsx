import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

class SecondComponent extends Component {
    constructor () {
        super();
        this.state = {
            myName: 'Dago Tshering',
        };
    }
    setName = () => {
        this.setState({myName: 'Sukuna'});
    }
  render() {
    return (
      <View>
        <Text>Name: {this.state.myName}</Text>
        <Text>Age: {this.props.data}</Text>
        <Button title='Update Name' onPress={this.setName}/>
      </View>
    )
  }
}

export default SecondComponent