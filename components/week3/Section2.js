import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from 'react-native';

export default function Section2() {
    return (
        <View style={{ flex: 1, marginHorizontal: 10, marginTop: -20, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>
            <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 25, textAlign: 'center' }} >Hilton San Francisco</Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center' }}>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome name='star' size={15} color='orange' />
                    <FontAwesome name='star' size={15} color='orange' />
                    <FontAwesome name='star' size={15} color='orange' />
                    <FontAwesome name='star' size={15} color='orange' />
                    <FontAwesome name='star-half' size={15} color='orange' />
                </View>
            </View>
            <View style={{ flexDirection: "column" }}>
                <Text style={{ fontsize: 20, textAlign: 'center' }} >Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
        </View>
    );
}
