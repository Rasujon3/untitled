import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ComponentOne from './ComponentOne';

class App extends Component {
    render() {
        return (
            <View style={{flexDirection:'row',height:"100%",width:"100%"}}>
            <View style={{backgroundColor:'orange',height:"100%",width:"32%"}}>
            <View style={{backgroundColor:'red',height:"100%",width:"32%"}}>
            <View style={{backgroundColor:'black',height:"100%",width:"32%"}}>

            </View>
            </View>
            </View>
            </View>
        );
    }
}

export default App;
