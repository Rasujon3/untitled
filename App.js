import React, {Component} from 'react';
import {ActivityIndicator, Picker, StatusBar, Switch, Text, View} from 'react-native';

class App extends Component {
constructor() {
    super();
    this.state={
        selectedItemValue:" ",
        selectedItemPosition:" ",
        switchStatus: false

    }
}
    render() {
        return (
            <View>
                <Switch
                    value={this.state.switchStatus}
                    onValueChange={(switchValue)=>
                    {this.setState({switchStatus:switchValue})}}
                >
                </Switch>

                <Text>{this.state.switchStatus?'ON':'OFF'}</Text>

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
