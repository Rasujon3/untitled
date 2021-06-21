import React, {Component} from 'react';
import {Alert, Button, Image, View} from 'react-native';
import WebView from 'react-native-webview';

class App extends Component {

    alertMe=()=>{
        Alert.alert("Sujon");
    }

    render() {
        return (
            <View style={{backgroundColor:'white',flex:3}}>
                <View style={{backgroundColor: 'red', flex: 1}}/>
                <View style={{backgroundColor: 'blue', flex: 1}}/>
                <View style={{backgroundColor: 'green', flex: 1}}/>
            </View>
        );
    }
}

export default App;
