import React from "react";
import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';

import { style } from "./style";
import { ButtonIcon } from "../../../global/button";
import notificationImg from '../../assets/notification.png'

export function Notification({navigation}){
    return(
        <View style={style.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <View style={style.singin}>
                    <ButtonIcon
                        onPress={() => {navigation.navigate('Perfil')}}
                        title="X" 
                        activeOpacity={0.7}
                    />
            </View>

            <View style={style.content}>

                <Image
                    source={notificationImg}
                    resizeMode="contain"
                    style={style.notificationimg}
                />
                
                <Text style={style.notificationText}>Notification</Text>
                <View>
                    <Text style={style.descriptionText}>Stay notified about neww food, updates, menu and recipes</Text>
                </View>

                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={style.buttonAllow}>Allow Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={style.buttonDontAllow} >Don't Allow</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}