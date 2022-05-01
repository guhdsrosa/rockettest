import React, {useState} from "react";
import {
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";

import { style } from "../ForgotPass/style";
import { ButtonIcon } from "../../../global/button";
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

export function ForgotPass({navigation}){

    const [email,setEmail] = useState("")

    const salvar = () =>{
        if (email == ""){
            Alert.alert("Error", "enter your email")
        }else{
            const text = navigation.navigate('SingIn');
            return text
        }
    }

    return(
        <View style={style.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <View style={style.singin}>
                <View style={style.button}>
                    <ButtonIcon
                        onPress={() => {navigation.navigate('SingIn')}}
                        title="x" 
                        activeOpacity={0.7}
                    />
                </View>
            </View>

            <View style={style.content}>
                <Text style={style.titleContent}>Forgot password?</Text>
                <Text style={style.textContent}>Enter your email adress to reset your password instruction</Text>

                <View>
                    <TextInput style={style.textEmail} 
                        placeholder='Email'
                        value={email}
                        onChangeText={email=>setEmail(email)}>
                    </TextInput>
                    <IconMCI name="email" size={20} color='#323232' style={style.icon}/>
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={() => {salvar()}}>
                    <Text style={style.buttonSendLink}>Send link</Text>
                </TouchableOpacity>

                <Text style={style.textFotter}>I cant't recover my account using this page</Text>

            </View>          
        </View>
    )
}