import React, {Component} from 'react';
import {Alert, Text, TouchableHighlight, View} from 'react-native';

class App extends Component {
    alertMe=()=>{
        Alert.alert("Hello");
    }
    render() {
        return (
            <View style={{flex:1, flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

                <TouchableHighlight activeOpacity={0.5} underlayColor="#DDDDDD" onPress={this.alertMe}>
                    <Text style={{fontSize:30}}>Hello</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

export default App;
