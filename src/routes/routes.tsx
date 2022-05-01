import React from "react";

import {SingIn} from '../screens/SingIn';
import { Registration } from "../screens/Registration";
import { ForgotPass } from "../screens/ForgotPass";
import { Perfil } from "../screens/Perfil";
import { PhoneVerification } from "../screens/PhoneVerification";
import { RegisterPhone } from "../screens/RegisterPhone";
import { Notification } from "../screens/Notification";
import { Explore } from "../screens/Explore";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconII from 'react-native-vector-icons/Ionicons';
import { global } from "../../global/styles/global";
import { Component } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Perfil"
            activeColor={"#fff"}
            barStyle={{backgroundColor: global.colors.backgroundPurple}}
            >
            <Tab.Screen 
                name="Store" 
                component={Explore} 
                options={{
                    tabBarLabel: 'Store',
                    tabBarIcon: ({color}) => (<IconMCI name="store" size={25} color={color}/>),
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={Perfil} 
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({color}) => (<IconII name="search" size={25} color={color}/>),
                }}
            />
            <Tab.Screen 
                name="Menu" 
                component={Perfil} 
                options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({color}) => (<IconII name="menu" size={25} color={color}/>),
                }}
            />
            <Tab.Screen 
                name="Perfil" 
                component={Perfil} 
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({color}) => (<IconII name="ios-person-outline" size={25} color={color}/>),
                }}
            />
            
        </Tab.Navigator>
    )
}

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SingIn">
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="SingIn" 
                    component={SingIn} 
                />
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="Registration" 
                    component={Registration} 
                />
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="ForgotPass" 
                    component={ForgotPass} 
                />
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="Perfil" 
                    component={HomeTabs} 
                />
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="RegisterPhone" 
                    component={RegisterPhone} 
                />
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="PhoneVerification" 
                    component={PhoneVerification} 
                />
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="Notification" 
                    component={Notification} 
                />
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="Explore" 
                    component={Explore} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;