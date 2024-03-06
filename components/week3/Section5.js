import React from "react";
import {  View } from "react-native";
import MyIcon from "./MyIcon";

export default function Section5() {
  return (
    <View style={{ padding : 20 , marginHorizontal : 10, borderBottomWidth : 1, borderColor : 'gray'}}>
        <View style={{ flexDirection : "row"}}>
            <MyIcon title="wifi" name="wifi" size={30} color="navy" />
            <MyIcon title="coffee" name="coffee" size={30} color="navy" />
            <MyIcon title="bath" name="bath" size={30} color="navy" />
            <MyIcon title="car" name="car" size={30} color="navy" />
            <MyIcon title="paw" name="paw" size={30} color="navy" />
        </View>
      </View>
    );
}