import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{ flex: 1, borderBottomWidth : 1, borderColor : 'gray', paddingVertical : 10 , marginHorizontal : 10}}>
            <View style={{ flexDirection: "column"}}>
                <Text style={{ fontSize: 20 }} >Location</Text>
                <Text style={{ fontsize: 20 }} >218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
                <Image style={{ flex : 1 , resizeMode : "cover", marginTop : 10 , paddingRight : 5}} source={require("../../assets/week3/map.jpg")} />
            </View>
        </View>
    );
}