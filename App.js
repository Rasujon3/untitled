import React, {Component} from 'react';
import {View} from 'react-native';
import ComponentOne from './ComponentOne';

class App extends Component {
    render() {
        return (
            <View>
                <ComponentOne name="Ra Sujon" city="Dhaka" age="23" />
            </View>
        );
    }
}

export default App;
