import React, {Component} from 'react';
import {View} from 'react-native';
import ComponentOne from '../components/componentOne';
import ComponentTwo from '../components/componentTwo';
import ComponentThree from '../components/componentThree';
import ComponentFour from '../components/componentFour';

class PageOne extends Component {
    render() {
        return (
            <View>
                <ComponentOne></ComponentOne>
                <ComponentTwo/>
                <ComponentThree/>
                <ComponentFour/>
            </View>
        );
    }
}

export default PageOne;
