import React, {Component} from 'react';
import {Text, View} from 'react-native';

class ComponentOne extends Component {
    render() {
        return (
            <View>
                <Text>Name : {this.props.name}</Text>
                <Text>Age : {this.props.age}</Text>
                <Text>City : {this.props.city}</Text>
            </View>
        );
    }
}

export default ComponentOne;
