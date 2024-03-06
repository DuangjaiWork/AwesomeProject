import React, { useState } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";

export default function Bmi() {  
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0'); 
    const [Text_bmi, setText_bmi] = useState('')

    console.log("STATE : ", weight, height, bmi);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));
        let description = "";
        if (output<18.5)
                description ="Underweight";
        else if (output>=18.5 && output<=24.99)
                description ="Normal";
        else if (output>=25 && output<=29.99)
            description ="Overweight";
        else if (output>=30 && output<=39.99)
                description ="Obese";
        else
                description ="Morbidly Obese";
        setText_bmi(description);
    };

    return (
        <View>
            <View style={{ padding : 20, backgroundColor : 'white', borderRadius : 10, height : 100, justifyContent : 'space-around', marginTop : 20 }}>
                <Text>Weight (kg.)</Text>
                <TextInput keyboardType='numeric' placeholder="Input your Weight ..." value={ weight } onChangeText={ (newWeight) => setWeight(newWeight) }></TextInput>
            </View>
            <View style={{ padding : 20, backgroundColor : 'white', borderRadius : 10, height : 100, justifyContent : 'space-around', marginTop : 20 }}>
                <Text>Height (cm.)</Text>
                <TextInput keyboardType='numeric' placeholder="Input your Height ..." value={ height } onChangeText={ (newHeight) => setHeight(newHeight) }></TextInput>
            </View>
            <View style={{ flexDirection : 'row', marginVertical : 20}}>
                <View style={{justifyContent : 'center', alignItems : 'center', backgroundColor : 'white', borderRadius : 10, height : 100, justifyContent : 'space-around', marginRight : 10, flex : 1}}>
                    <Text style={{fontSize:30}}>{bmi}</Text>
                </View>
                <View style={{justifyContent : 'center', alignItems : 'center', backgroundColor : 'white', borderRadius : 10, height : 100, justifyContent : 'space-around', marginLeft : 10, flex : 1}}>
                    <Text style={{fontSize:30}}>{Text_bmi}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}
