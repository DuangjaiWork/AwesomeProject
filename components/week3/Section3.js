import React from 'react';
import { Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={{ paddingHorizontal : 20  }}>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ width: 50, height: 50, borderRadius: 50 / 2, backgroundColor : 'red' }}>
                    <Text style={{ fontSize: 20, marginVertical : 10 ,marginHorizontal : 10, color : 'white' }}>9.5</Text>
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, color : 'red' }}>Excellent</Text>
                    <Text style={{ color: "gray" }}>See 801 reviews</Text>
                </View>
            </View>
        </View>    
    );
}