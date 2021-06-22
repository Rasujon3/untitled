import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

class App extends Component {

    constructor() {
        super();
        this.state={
            num1:0,
            num2:0,
            result:" "
        }
    }
    addTwo=()=>{
        var x = this.state.num1+this.state.num2;
        this.setState({result:x.toString()})
    }

    render() {
        return (
            <View style={{padding:20}}>
                <TextInput onChangeText={(text)=>{this.setState({num1: parseInt(text)})}} placeholder="Number One" style={{marginBottom:10,padding:10,borderWidth:1,borderColor:'black',height:40}}></TextInput>
                <TextInput onChangeText={(text)=>{this.setState({num2: parseInt(text)})}} placeholder="Number Two" style={{marginBottom:10,padding:10,borderWidth:1,borderColor:'black',height:40}}></TextInput>
                <Button onPress={this.addTwo} title="Add" />
                <Text style={{margin:10,fontSize:24}}>Result: {this.state.result}</Text>
            </View>
        );
    }
}

export default App;
