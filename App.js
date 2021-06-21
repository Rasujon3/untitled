import React, {Component} from 'react';
import {Alert, Button, View} from 'react-native';

class App extends Component {

    alertMe=()=>{
        Alert.alert("Sujon");
    }

    render() {
        return (
            <View>
                <Button color="green" title="Save" onPress={this.alertMe}/>
            </View>
        );
    }
}

export default App;
