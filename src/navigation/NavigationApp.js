import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import { screen } from "../utils"

import { HomeScreen } from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export function NavigationApp() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: (props) => tabIcon({ route, ...props }),
            })}>
                <Tab.Screen name={screen.home.tab} component={HomeScreen} options={{ title: "Inicio" }} />
                <Tab.Screen name={screen.trends.tab} component={HomeScreen} options={{ title: "Tendencias" }} />
                <Tab.Screen name="Upload" component={HomeScreen} options={{ title: "Publicar", tabBarStyle: { color: "#f00" } }} />
                <Tab.Screen name={screen.notifications.tab} component={HomeScreen} options={{ title: "Notificaciones" }} />
                <Tab.Screen name={screen.account.tab} component={HomeScreen} options={{ title: "Perfil" }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
//No sirve el color ---------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function tabIcon(props) {
    const { route, size, color, focused } = props;

    let iconName = "plus";

    if (route.name === screen.home.tab) {
        //Si focused es true mandame home sino mandame home-outline (ColorIcon)
        iconName = focused ? "home" : "home-outline";
    }

    if (route.name === screen.trends.tab) {
        iconName = focused ? "compass" : "compass";
    }

    if (route.name === "Upload") {
        return (
            <Icon type='material-community'
                name='plus'
                size={size}
                color={color}
                containerStyle={{
                    backgroundColor: "#000",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 6,
                }}
                iconStyle={{
                    color: "#fff",
                    fontSize: 14,
                }}
            />
        );
    }

    if (route.name === screen.notifications.tab) {
        iconName = focused ? "message-processing" : "message-processing-outline";
    }

    if (route.name === screen.account.tab) {
        iconName = focused ? "account" : "account-outline";
    }

    return (
        <Icon type="material-community" name={iconName} size={size} color={color} />
    );
}

//message-badge