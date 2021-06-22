import React, {Component} from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';

class App extends Component {

    itemChild = ({itemData}) => {
        return (
            <View>
                <Text>{itemData}</Text>
            </View>
        );
    };

    itemHeadChild = ({header}) => {
        return (
            <View style={{height: 20, width: '100%', backgroundColor: 'blue'}}>
                <Text style={{height: 20, width: '100%', backgroundColor: 'blue'}}>{header}</Text>
            </View>
        );
    };

    DATA = [
        {title: 'Bangladesh', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'India', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Pakistan', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Pakistan', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Pakistan', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Pakistan', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Pakistan', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Pakistan', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
    ]

    render() {
        return (
            <SafeAreaView>
                <SectionList
                    sections={this.DATA}
                    renderItem={({item}) => <this.itemChild itemData={item}/>}
                    renderSectionHeader={({section:{title}})=><this.itemHeadChild header={title}/>}
                keyExtractor={(item,index)=>item+index}
                />
            </SafeAreaView>
        );
    }
}

export default App;
