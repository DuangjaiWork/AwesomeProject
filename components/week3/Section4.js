import React from 'react';
import { Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ flex: 1, borderTopWidth : 1, borderBottomWidth : 1, borderColor : 'gray', paddingVertical : 10 , marginHorizontal : 10}}>
            <View style={{ flexDirection: "column" , paddingHorizontal : 5}}>
                <Text style={{ fontSize: 20 }} >Hotel Description</Text>
                <Text style={{ fontsize: 20 }} >218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>
    );
}