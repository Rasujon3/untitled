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
            <View style={{height: 40,padding:10, width: '100%', backgroundColor: 'teal'}}>
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
        {title: 'Canada', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'America', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'England', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Kania', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Pakistan', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Peru', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Bangladesh', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'India', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Canada', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'America', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'England', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Kania', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Pakistan', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']},
        {title: 'Peru', data: ['Rangpur', 'Dhaka', 'Khulna', 'Rajshahi']}
    ]

    render() {
        return (
            <SafeAreaView>
                <SectionList
                    // inverted={-1}
                    stickySectionHeadersEnabled={true}
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
