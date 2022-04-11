import React from 'react'
import { View } from 'react-native'
import { Text } from '@rneui/themed';
import { style } from "./AuthScreen.style"

export function AuthScreen() {
    return (
        <View style={style.content} >
            <Text>Auth Screen</Text>
        </View>
    );
}