import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';

class App extends Component {
    render() {
        return (
            <View>
                <StatusBar hidden={true} barStyle="dark-content" backgroundColor="#000000"/>
            </View>
        );
    }
}

export default App;
