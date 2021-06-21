import React, {Component} from 'react';
import {Alert, Button, FlatList, Image, ScrollView, Text, View} from 'react-native';
import WebView from 'react-native-webview';

class App extends Component {

    MyData=[
        {title:"Bangladesh",subtitle:"Country Name, Nation name"},
        {title:"India",subtitle:"Country Name, Nation name"},
        {title:"Pakistan",subtitle:"Country Name, Nation name"},
        {title:"Nepal",subtitle:"Country Name, Nation name"},
        {title:"Bhutan",subtitle:"Country Name, Nation name"},
        {title:"Australia",subtitle:"Country Name, Nation name"},
        {title:"USA",subtitle:"Country Name, Nation name"},
    ];

    ChildView=({Childtitle,Childsubtitle})=>{
        return(
            <View style={{backgroundColor:'white',padding:10,margin:10}} >
                <Text style={{color:'black',fontSize:18}}>{Childtitle}</Text>
                <Text style={{color:'black',fontSize:12}}>{Childsubtitle}</Text>
            </View>
        )
    }

    render() {
        return (
            <FlatList data={this.MyData} renderItem={({item})=><this.ChildView Childtitle={item.title} Childsubtitle={item.subtitle} />}/>

        );
    }
}

export default App;
