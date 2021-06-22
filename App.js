import React, {Component} from 'react';
import {Alert, Button, FlatList, Image, ScrollView, Text, View} from 'react-native';
import WebView from 'react-native-webview';

class App extends Component {

    MyData = [
        {
            id:"1",
            title: 'Bangladesh',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            id:"2",
            title: 'India',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            id:"3",
            title: 'Pakistan',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            id:"4",
            title: 'Nepal',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            id:"5",
            title: 'Bhutan',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            id:"6",
            title: 'Australia',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            id:"7",
            title: 'USA',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            id:"8",
            title: 'Bangladesh',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            id:"9",
            title: 'India',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            id:"10",
            title: 'Pakistan',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            id:"11",
            title: 'Nepal',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            id:"12",
            title: 'Bhutan',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            id:"13",
            title: 'Australia',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            id:"14",
            title: 'USA',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
    ];

    onClickItem=(Alerttitle)=>{
        Alert.alert(Alerttitle)
    }

    ChildView = ({Childtitle, Childsubtitle, img}) => {
        return (
            <View style={{flexDirection: 'column',height:200,width:170, backgroundColor: 'white', margin: 5}}>

                <View>
                    <Image style={{width: '100%', height: 100}} source={{uri: img}}/>

                </View>

                <View style={{padding:10}}>
                    <Text onPress={this.onClickItem.bind(this,Childsubtitle)} style={{color: 'black', fontSize: 18}}>{Childtitle}</Text>
                    <Text style={{color: 'black', fontSize: 12}}>{Childsubtitle}</Text>

                </View>


            </View>
        );
    };

    render() {
        return (
            <FlatList keyExtractor={item => item.id} numColumns={2} horizontal={false} data={this.MyData}
                      renderItem={({item}) => <this.ChildView Childtitle={item.title} Childsubtitle={item.subtitle}
                                                              img={item.img}/>}/>

        );
    }
}

export default App;
