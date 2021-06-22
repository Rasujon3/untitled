import React, {Component} from 'react';
import {Alert, SafeAreaView, SectionList, Text, View} from 'react-native';

class App extends Component {

    itemChild = ({itemData}) => {
        return (
            <View>
                <Text onPress={this.childClick.bind(this,itemData)}>{itemData}</Text>
            </View>
        );
    };

    itemHeadChild = ({header}) => {
        return (
            <View style={{height: 20, width: '100%', backgroundColor: 'blue'}}>
                <Text onPress={this.childHeadClick.bind(this,header)} style={{color:'white'}}>{header}</Text>
            </View>
        );
    };

    childClick=(childName)=>{
        Alert.alert(childName);
    }
    childHeadClick=(header)=>{
        Alert.alert(header);
    }

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
