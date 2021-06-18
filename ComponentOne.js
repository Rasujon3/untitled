import React from 'react';
import {Text, View} from 'react-native';

const ComponentOne = (props) => {
    return (
        <View>
            <Text>Name : {props.name}</Text>
            <Text>Age : {props.age}</Text>
            <Text>City : {props.city}</Text>
        </View>
    );
};

export default ComponentOne;
