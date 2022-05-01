import { StyleSheet } from "react-native";
import { global } from "../../../global/styles/global";

export const style = StyleSheet.create({   
    //Cabeçalho dos botões
    container: {
        backgroundColor: global.colors.backgroundWhite,
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
        backgroundColor: global.colors.backgroundPurple,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 35,
        paddingHorizontal: 30,
        height: '100%',
    },
    //\Conteudo

    //Textos
    notificationText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: global.colors.textWhite,
        paddingBottom: 20,
        textAlign: 'center'
    },

    descriptionText: {
        color: global.colors.textWhite,
        fontWeight: '400',
        fontSize: 17,
        textAlign: 'center'
    },
    //\Textos

    //Botão
    buttonAllow:{
        textAlign: 'center',
        backgroundColor: global.colors.backgroundWhite,
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30,
        paddingTop: 15,
        paddingBottom: 15,
        color: global.colors.backgroundPurple,
        borderRadius: 30,
        fontWeight: 'bold',

        shadowColor: global.colors.backgroundWhite,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },

    buttonDontAllow:{
        textAlign: 'center',
        backgroundColor: global.colors.backgroundPurple,
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30,
        paddingTop: 15,
        paddingBottom: 15,
        color: global.colors.textWhite,
        borderRadius: 30,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: global.colors.textWhite
    },

    notificationimg: {
        height: '30%',
        width: '100%'
        
    }
})