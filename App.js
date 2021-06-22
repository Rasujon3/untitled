import React, {Component} from 'react';
import {ImageBackground, Text, View} from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <ImageBackground style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
                                 source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg'}}>
                    <Text style={{color: 'white', fontSize: 40}}>Hello</Text>
                    <Text style={{color: 'white', fontSize: 40}}>Hello</Text>
                    <Text style={{color: 'white', fontSize: 40}}>Hello</Text>
                </ImageBackground>
            </View>
        );
    }
}

export default App;
