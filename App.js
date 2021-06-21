import React, {Component} from 'react';
import {Alert, Button, FlatList, Image, ScrollView, Text, View} from 'react-native';
import WebView from 'react-native-webview';

class App extends Component {

    MyData = [
        {
            title: 'Bangladesh',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            title: 'India',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            title: 'Pakistan',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            title: 'Nepal',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            title: 'Bhutan',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            title: 'Australia',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            title: 'USA',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            title: 'Bangladesh',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            title: 'India',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            title: 'Pakistan',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            title: 'Nepal',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
            title: 'Bhutan',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_960_720.jpg',
        },
        {
            title: 'Australia',
            subtitle: 'Country Name, Nation name',
            img: 'https://cdn.pixabay.com/photo/2021/06/17/19/06/sunset-6344387_960_720.jpg',
        },
        {
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
            <View style={{flexDirection: 'column',height:200,width:200, backgroundColor: 'green', margin: 5}}>

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
            <FlatList horizontal={true} data={this.MyData}
                      renderItem={({item}) => <this.ChildView Childtitle={item.title} Childsubtitle={item.subtitle}
                                                              img={item.img}/>}/>

        );
    }
}

export default App;
