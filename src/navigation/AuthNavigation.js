import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from '../screens/Auth';
import { screen } from '../utils';

const Stack = createNativeStackNavigator();


export function AuthNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screen.auth.auth} component={AuthScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}  