import { StyleSheet } from "react-native";
import { JumpingTransition } from "react-native-reanimated";
import { global } from "../../../global/styles/global";

export const style = StyleSheet.create({
    //Cabeçalho dos botões
    container: {
        backgroundColor: global.colors.backgroundPurple,
        height: '100%'
    },

    singin: {
        marginTop: 60,
        marginBottom:70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    //\Cabeçalho dos botões

    //Conteudo
    content: {
        backgroundColor: global.colors.backgroundWhite,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 35,
        paddingHorizontal: 30
    },
    //\Conteudo

    //Textos
    phoneVTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: global.colors.greyColorTitle,
        paddingBottom: 20
    },

    phoneVcontent: {
        color: global.colors.greyColor,
        fontWeight: '400',
        fontSize: 17
    },

    skipText: {
        color: global.colors.textWhite
    },
    //\Textos

    //Imput Codes
    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 60,
    },

    inputNumber:{
        height: 45, 
        borderRadius: 20,
        paddingLeft: 50,
        backgroundColor: '#E7E7E7',
        marginTop: 60,
        marginBottom: 30,
    },

    keyboard:{
        backgroundColor: global.colors.backgroundPurple,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    keyboardNumbers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,

    },

    numbers: {
        color: global.colors.textWhite,
        textAlign: 'center',
        paddingTop: 40,
        fontSize: 22
    },

    iconDelete: {
        paddingTop: 40,
    },

    paddingButton:{
        paddingTop: 30,
    },

    buttonKeyboard:{
        marginHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: global.colors.textWhite
    },

    textButton: {
        textAlign: 'center',
        color: global.colors.backgroundPurple
    }
})