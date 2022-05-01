import React, {Component, useState} from "react";
import {
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import {style} from './style';
import { ButtonIcon } from "../../../global/button";
import IconF from 'react-native-vector-icons/Feather';
import { Button } from "react-native-elements";

export function RegisterPhone({navigation}){
    
    const [number, Setnumber] = useState('')

    const Counter = () => {
        
        return(
            <TextInput 
                style={style.inputNumber}
                keyboardType="decimal-pad"
                value={number}
                >
            </TextInput>
        )
    }

    return(
        <View style={style.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <View style={style.singin}>
                <ButtonIcon
                    onPress={() => {navigation.navigate('Registration')}}
                    title="<" 
                    activeOpacity={0.7}
                />
                <Text style={style.skipText} onPress={() => {navigation.navigate('Perfil')}}>Skip</Text>
            </View>

            <View style={style.content}>
                <Text style={style.phoneVTitle}>Register phone</Text>
                <View>
                    <Text style={style.phoneVcontent}>
                        Enter your mobile number to enable {'\n'}
                        2-step verfication
                    </Text>
                </View>
                <Counter />
            </View>
            
            <View style={style.keyboard}>
                <View style={style.keyboardNumbers}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() =>{Setnumber('1')}}>
                        <Text style={style.numbers}  >1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() =>{Setnumber('2')}}>
                        <Text style={style.numbers}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() =>{Setnumber('3')}}>
                        <Text style={style.numbers}>3</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={style.keyboardNumbers}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() =>{Setnumber('4')}}>
                        <Text style={style.numbers}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() =>{Setnumber('5')}}>
                        <Text style={style.numbers}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() =>{Setnumber('6')}}>
                        <Text style={style.numbers}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.keyboardNumbers}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() =>{Setnumber('7')}}>
                        <Text style={style.numbers}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() =>{Setnumber('8')}}>
                        <Text style={style.numbers}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() =>{Setnumber('9')}}>
                        <Text style={style.numbers}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.keyboardNumbers}>
                    <IconF name="delete" size={30} color="#3f52b3"/>
                    <TouchableOpacity activeOpacity={0.7} onPress={() =>{Setnumber('0')}}>
                        <Text style={style.numbers}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                        <IconF name="delete" size={30} color="#fff" style={style.iconDelete}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                    <View style={style.paddingButton}>
                        <View style={style.buttonKeyboard}>
                            <Text style={style.textButton}>Next</Text>
                        </View> 
                    </View> 
                </TouchableOpacity>
            </View>
        </View>
    )

}