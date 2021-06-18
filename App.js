import React, {useState} from 'react';
import {Text, View} from 'react-native';



const App = () => {

    const [state, setState] = useState({
        name:"Ruhul Amin",
        city:"Dhaka"
    });

    return (
        <View>
            <Text>{state.name}</Text>
            <Text>{state.city}</Text>
        </View>
    );
};

export default App;
