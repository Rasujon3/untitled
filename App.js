import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

class App extends Component {
    render() {
        return (
            <View>
                <TextInput multiline={false} autoFocus={true} maxLength={5} textAlign='center' placeholderTextColor='red' placeholder="your Name" style={{margin:20,padding:10,borderWidth:1,borderColor:'black',height:50}}></TextInput>
            </View>
        );
    }
}

export default App;
