import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { global } from '../../../global/styles/global'


export const style = StyleSheet.create({
    container: {
        backgroundColor: global.colors.backgroundPurple,
    },

    button: {
        paddingLeft: 30
    },

    singin: {
        marginTop: 60,
        marginBottom:70,
    },

    content: {
        backgroundColor: global.colors.backgroundWhite,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%'
    },

    titleContent: {
        marginLeft: global.content.marginLeft,
        marginTop: global.content.marginTop,
        fontWeight: 'bold',
        fontSize: 25
    },
    
    textContent: {
        marginLeft: global.content.marginLeft,
        marginTop: 15,
        marginBottom: 30,
        color: global.colors.greyColor,
        fontSize: 16
    },

    textInfo: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        
    },

    icon: {
        position: 'absolute',
        marginLeft: 45,
        marginTop: 9
    },

    textEmail: {
        height: 40, 
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
        paddingLeft: 50,
    },

    buttonSendLink:{
        textAlign: 'center',
        backgroundColor: global.colors.backgroundPurple,
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30,
        paddingTop: 15,
        paddingBottom: 15,
        color: global.colors.textWhite,
        borderRadius: 30,

        shadowColor: global.colors.backgroundPurple,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },

    textFotter: {
        color: global.colors.goldenColor,
        textAlign: 'center',
        marginTop: 30
    },

})