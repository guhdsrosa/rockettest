import React from "react";
import {
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {style} from './style';
import { ButtonIcon } from "../../../global/button";
import IconF from 'react-native-vector-icons/Feather';

export function PhoneVerification({navigation}){
    return(
        <View style={style.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <View style={style.singin}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate('RegisterPhone')}}>
                    <ButtonIcon
                        onPress={() => {navigation.navigate('RegisterPhone')}}
                        title="<" 
                        activeOpacity={0.7}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate('Perfil')}}>
                    <ButtonIcon
                    onPress={() => {navigation.navigate('Home')}}
                        title="X" 
                        activeOpacity={0.7}
                    />
                </TouchableOpacity>
            </View>

            <View style={style.content}>
                <Text style={style.phoneVTitle}>Phone Verification</Text>
                <View>
                    <Text style={style.phoneVcontent}>Enter your otp code here</Text>
                </View>
                <View style={style.input}>
                    <TextInput style={style.inputCode} maxLength={1}></TextInput>
                    <TextInput style={style.inputCode} maxLength={1}></TextInput>
                    <TextInput style={style.inputCode} maxLength={1}></TextInput>
                    <TextInput style={style.inputCode} maxLength={1}></TextInput>
                </View>
            </View>

            <View style={style.keyboard}>
                <View style={style.keyboardNumbers}>
                    <Text style={style.numbers}>1</Text>
                    <Text style={style.numbers}>2</Text>
                    <Text style={style.numbers}>3</Text>
                </View>
                <View style={style.keyboardNumbers}>
                    <Text style={style.numbers}>4</Text>
                    <Text style={style.numbers}>5</Text>
                    <Text style={style.numbers}>6</Text>
                </View>
                <View style={style.keyboardNumbers}>
                    <Text style={style.numbers}>7</Text>
                    <Text style={style.numbers}>8</Text>
                    <Text style={style.numbers}>9</Text>
                </View>
                <View style={style.keyboardNumbers}>
                    <IconF name="delete" size={30} color="#3f52b3"/>
                    <Text style={style.numbers}>0</Text>
                    <IconF name="delete" size={30} color="#fff" style={style.iconDelete}/>
                </View>
                <View style={style.paddingButton}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate('Perfil')}}>
                        <View style={style.buttonKeyboard}>
                            <Text style={style.textButton}>Next</Text>
                        </View> 
                    </TouchableOpacity>
                </View> 
            </View>

        </View>
    )

}