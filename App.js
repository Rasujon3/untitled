import React, {Component} from 'react';
import { View} from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{flexDirection:'row',height:"100%",width:"100%"}}>
            <View style={{backgroundColor:'orange',height:"100%",width:"33%"}}></View>
            <View style={{backgroundColor:'red',height:"100%",width:"33%"}}></View>
            <View style={{backgroundColor:'black',height:"100%",width:"34%"}}></View>




            </View>
        );
    }
}

export default App;
