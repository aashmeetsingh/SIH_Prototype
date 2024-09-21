import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn(bgColor, BtnLabel, TextColor) {
    return (
        <TouchableOpacity style={{
            backgroundColor: bgColor,
            borderRadius: 100,
            alignItems: 'center',
            width: 250,
        }}>
            <Text style={{
                color: TextColor,
                fontSize: 22,
                fontWeight: 'bold'

            }}>{BtnLabel}</Text>
        </TouchableOpacity>
    );
}