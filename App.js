import React, {Component} from 'react';
import {Button, Image, Text, View} from 'react-native';

class App extends Component {

    constructor() {
        super();
        this.state={
            name:"Sujon",
            age:"29",
            city:"dhaka"
        }
    }

    change=()=>{
        this.setState({name:"Liya",age:"18",city:"BD, GB"})
}

    render() {
        return (
           <View>
               <Text>{this.state.name}</Text>
               <Text>{this.state.city}</Text>
               <Text>{this.state.age}</Text>
               <Button onPress={this.change} title="Click Me"/>
           </View>
        );
    }
}

export default App;
