import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';



const App = () => {

    const [state, setState] = useState({
        name:"Ruhul Amin",
        city:"Dhaka"
    });

   const changeValue=()=>{
        setState({name: "Liya",city: "Gb,Bd"});
    }

    return (
        <View>
            <Text>{state.name}</Text>
            <Text>{state.city}</Text>
            <Button title="Click Me" onPress={changeValue}/>
        </View>
    );
};

export default App;
