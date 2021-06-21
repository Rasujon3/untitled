import React, {Component} from 'react';
import {Alert, Button, Image, ScrollView, View} from 'react-native';
import WebView from 'react-native-webview';

class App extends Component {

    alertMe=()=>{
        Alert.alert("Sujon");
    }

    render() {
        return (
            <ScrollView horizontal={true}>
                <View style={{backgroundColor: 'red', height:100,width:360}}/>
                <View style={{backgroundColor: 'green', height:100,width:360}}/>
                <View style={{backgroundColor: 'blue', height:100,width:360}}/>
                <View style={{backgroundColor: 'teal', height:100,width:360}}/>
                <View style={{backgroundColor: 'red', height:100,width:360}}/>
                <View style={{backgroundColor: 'green', height:100,width:360}}/>
                <View style={{backgroundColor: 'blue', height:100,width:360}}/>
                <View style={{backgroundColor: 'teal', height:100,width:360}}/>
                <View style={{backgroundColor: 'red', height:100,width:360}}/>
                <View style={{backgroundColor: 'green', height:100,width:360}}/>
                <View style={{backgroundColor: 'blue', height:100,width:360}}/>
                <View style={{backgroundColor: 'teal', height:100,width:360}}/>
            </ScrollView>
        );
    }
}

export default App;
