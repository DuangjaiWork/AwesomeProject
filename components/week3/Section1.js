import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ flex : 1, flexDirection : 'column' }}>
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 16/5 }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
        </View>    
    );
}
