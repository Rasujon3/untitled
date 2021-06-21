import React, {Component} from 'react';
import {Alert, Button, View} from 'react-native';
import WebView from 'react-native-webview';

class App extends Component {

    alertMe=()=>{
        Alert.alert("Sujon");
    }

    render() {
        return (
            <View style={{height:'100%',width:'100%'}}>
                <WebView source={{uri:'https://www.google.com'}}/>
            </View>
        );
    }
}

export default App;
