import React, {Component} from 'react';
import {ActivityIndicator, Picker, StatusBar, Text, View} from 'react-native';

class App extends Component {
constructor() {
    super();
    this.state={
        selectedItemValue:" ",
        selectedItemPosition:" "

    }
}
    render() {
        return (
            <View>
                <ActivityIndicator size="large" color="#ff2233"/>
                <Picker
                    selectedValue={this.state.selectedItemValue}
                    onValueChange={(itemValue, itemPosition)=>
                    {this.setState({selectedItemValue:itemValue,
                        selectedItemPosition:itemPosition})}}
                >
                    <Picker.Item label="Bangladesh" value="Bangladesh"/>
                    <Picker.Item label="India" value="India"/>
                    <Picker.Item label="Pakistan" value="Pakistan"/>
                    <Picker.Item label="Canada" value="Canada"/>
                    <Picker.Item label="America" value="America"/>
                </Picker>
                <Text style={{fontSize: 40}}>{this.state.selectedItemValue}</Text>
            </View>
        );
    }
}

export default App;
