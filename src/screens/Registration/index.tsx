import React, { useState } from "react";
import{
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    Alert
} from 'react-native';

import {CheckBox} from 'react-native-elements'

import { style } from "./style";
import { ButtonIcon } from "../../../global/button";
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import googleIcon from '../../assets/google.png';
import { color } from "react-native-reanimated";

export function Registration({navigation}){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [fName,setfName] = useState("")
    const [lName,setlName] = useState("")
    const [isSelected,setIsSelected] = useState(false)

    const valida = () => {
        if (email == "" || password == "" || fName == "" || lName == ""){
            Alert.alert("Error", "Fill in all fields to continue")
        }
        else
        if(!isSelected){
            Alert.alert("Error", "Accept the terms to continue")
        }
        else{
            Alert.alert("Sucess", "your create account")
            const navigatio = navigation.navigate('RegisterPhone')
            return navigatio
        }
    }

    return(
        <KeyboardAvoidingView style={style.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <View style={style.singin}>
                <ButtonIcon
                    onPress={() => {navigation.navigate('SingIn')}}
                    title="<" 
                    activeOpacity={0.7}
                />
                <Text style={style.titleSingUp}>Sign up</Text>
            </View>

            <View style={style.content}>
                <Text style={style.titleContent}>Registration</Text>
                <Text style={style.textContent}>Fill your credential login</Text>

                <View>
                    <TextInput style={style.textInfo} placeholder='First Name' value={fName} onChangeText={fname=>setfName(fname)}></TextInput>
                    <IconFA5 name="user-alt" size={20} color='#323232' style={style.icon} />
                </View>
                <View>
                    <TextInput style={style.textInfo} placeholder='Last Name' value={lName} onChangeText={lname=>setlName(lname)}></TextInput>
                    <IconFA5 name="user-alt" size={20} color='#323232' style={style.icon} />
                </View>
                <View>
                    <TextInput style={style.textInfo} placeholder='Email' value={email} onChangeText={text=>setEmail(text)}></TextInput>
                    <IconMCI name="email" size={20} color='#323232' style={style.icon}/>
                </View>
                <View>
                    <TextInput style={style.textPass} placeholder='Password' secureTextEntry={true} value={password} onChangeText={pass=>setPassword(pass)}></TextInput>
                    <IconMCI name="key" size={20} color='#323232' style={style.icon}/>
                </View>
                
                <View style={style.textTerms}>
                    <CheckBox
                        textStyle={{color: "#FF8F00", fontWeight: '400'}}
                        title="I agree to he Airi Terms"
                        checkedIcon="check"
                        uncheckedIcon="circle"
                        checkedColor="#FF8F00"
                        uncheckedColor="#DEDEDE"
                        checked={isSelected}
                        onPress={() => setIsSelected(!isSelected)}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={style.buttonSingUp} onPress={() => valida()}>Sing up</Text>
                </TouchableOpacity>

                <View>
                    <Image 
                        source={googleIcon}
                        resizeMode= "contain"
                        style={style.googleIcon}
                    />
                    <TouchableOpacity activeOpacity={0.7}> 
                        <Text style={style.buttonCreateAcc}>
                            Sing in with Google
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>  
        </KeyboardAvoidingView>
    )
}