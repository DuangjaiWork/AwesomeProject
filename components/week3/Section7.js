import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding : 20, borderBottomWidth : 1, borderColor : 'gray' }}>
            <Text style={{ fontSize: 20 }}>Room Type</Text>
            <View style={{ flexDirection: "row", marginTop:10 }}>
                <Image style={{ width: 80, height: 100, borderRadius: 10 }} source={require("../../assets/week3/room-8.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
                    <View style={{ marginTop : 20}}>
                        <Text style={{ fontSize: 20, color: "red"}}>$399.99</Text>
                        <Text style={{ color: "navy"}}>Hurry Up! This is your last room!</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}