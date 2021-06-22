import React, {Component} from 'react';
import {StyleSheet,ActivityIndicator, Button, Modal, Picker, StatusBar, Switch, Text, View} from 'react-native';

class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedItemValue: ' ',
            selectedItemPosition: ' ',
            switchStatus: false,
            modalVisibility: false,

        };
    }

    openModal = () => {
        this.setState({modalVisibility: true});
    };

    closeModal = () => {
        this.setState({modalVisibility: false});
    };

    style = StyleSheet.create({
        modalView: {
            height: 150,
            width: 350,
            backgroundColor: 'white',
            margin: 10,
            padding: 20,
            elevation: 5,
            shadowColor: '#ff2233',
            alignItems: 'center',
            shadowOffset: {height: 0, width: 2},
        },
    });

    render() {
        return (
            <View>
                <Modal animated='slide' visible={this.state.modalVisibility}>
                    <View style={this.style.modalView}>
                        <Text>I am Modal</Text>
                        <Button onPress={this.closeModal} title="Close"/>
                    </View>
                </Modal>
                <Button onPress={this.openModal} title="Open"/>


                <Switch
                    value={this.state.switchStatus}
                    onValueChange={(switchValue) => {
                        this.setState({switchStatus: switchValue});
                    }}
                >
                </Switch>

                <Text>{this.state.switchStatus ? 'ON' : 'OFF'}</Text>

                <ActivityIndicator size="large" color="#ff2233"/>
                <Picker
                    selectedValue={this.state.selectedItemValue}
                    onValueChange={(itemValue, itemPosition) => {
                        this.setState({
                            selectedItemValue: itemValue,
                            selectedItemPosition: itemPosition,
                        });
                    }}
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
