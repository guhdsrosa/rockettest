import React, { useState } from "react";
import{
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Alert
} from 'react-native';

import { style } from "./style";
import { ButtonIcon } from "../../../global/button";
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import googleIcon from '../../assets/google.png';


export function SingIn({navigation}){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const login = '123@gmail.com'
    const pass = '123'

    const salvar = () => {
        
        if (email == "" || email != login || password == "" || password  != pass){
            Alert.alert("Error", "invalid email or password")
        } else
        if (email == login && password == pass){
            const text = navigation.navigate('Perfil')
            return text
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
                    title="<" 
                    activeOpacity={0.7}
                />
                <Text style={style.titleSingIn}>Sign in</Text>
            </View>

            <View style={style.content}>
                <Text style={style.titleContent}>Welcome back</Text>
                <Text style={style.textContent}>Enter your crendential login</Text>

                <View>
                    <TextInput 
                        style={style.textEmail} 
                        placeholder='Email'
                        value={email}
                        onChangeText={text=>setEmail(text)}
                        >
                    </TextInput>
                    <IconMCI name="email" size={20} color='#323232' style={style.icon}/>
                </View>
                
                <View>
                    <TextInput 
                        style={style.textPass} 
                        placeholder='Password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={pass=>setPassword(pass)}
                        >
                    </TextInput>
                    <IconMCI name="key" size={20} color='#323232' style={style.icon}/>
                </View>

                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={style.buttonSingIn} onPress={() => {salvar()}}>Sing In</Text>
                </TouchableOpacity>

                <Text style={style.textForgotPass} onPress={() => {navigation.navigate('ForgotPass')}}>
                    Forgot your password
                </Text>

                <View style={style.Orstyle}>
                    <Text style={style.textOr}><View style={style.barOr}></View> Or <View style={style.barOr}></View></Text>
                </View>
                
                <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate('Registration')}}>
                    <Text style={style.buttonCreateAcc}>Create an Account</Text>
                </TouchableOpacity>

                <View>
                    <Image 
                        source={googleIcon}
                        resizeMode= "contain"
                        style={style.googleIcon}
                    />
                    <TouchableOpacity activeOpacity={0.7}> 
                        <Text style={style.buttonCreateAcc}>
                            Sign in with Google
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>

            
        </KeyboardAvoidingView>
    )
}