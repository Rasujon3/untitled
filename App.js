import React, {Component} from 'react';
import {Alert, Button, Image, View} from 'react-native';
import WebView from 'react-native-webview';

class App extends Component {

    alertMe=()=>{
        Alert.alert("Sujon");
    }

    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <View style={{backgroundColor: 'red', height:720,width:360}}/>
            </View>
        );
    }
}

export default App;
