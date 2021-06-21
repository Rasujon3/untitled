import React, {Component} from 'react';
import {Alert, Button, Image, View} from 'react-native';
import WebView from 'react-native-webview';

class App extends Component {

    alertMe=()=>{
        Alert.alert("Sujon");
    }

    render() {
        return (
            <View style={{height:'100%',width:'100%'}}>
                <Image style={{height:'50%',width:'100%'}} source={{uri:'https://sujonrafkhata.000webhostapp.com/admin/upload/cb2324172b.png'}}/>
                <Image style={{height:'50%',width:'100%'}} source={require('./images/sujon.png')}/>

            </View>
        );
    }
}

export default App;
