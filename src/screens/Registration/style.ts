import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { global } from '../../../global/styles/global'


export const style = StyleSheet.create({
    container: {
        backgroundColor: global.colors.backgroundPurple,
    },

    singin: {
        marginTop: 60,
        marginBottom:70,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    titleSingUp: {
        color: global.colors.textWhite,
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        paddingRight: 30,
        fontWeight: '500'
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
        marginBottom: 30
    },

    icon: {
        position: 'absolute',
        marginLeft: 45,
        marginTop: 9
    },

    textInfo: {
        height: 40, 
        marginBottom: 35,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
        paddingLeft: 50,
    },

    textPass: {
        height: 40, 
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
        paddingLeft: 50,
    },

    textTerms: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
    },

    buttonSingUp:{
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

    buttonCreateAcc: {
        textAlign: 'center',
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30,
        paddingTop: 15,
        paddingBottom: 15,
        color: global.colors.greyColor,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: global.colors.greyColor
    },

    googleIcon: {
        position: 'absolute',
        width: 30,
        height: 30,
        marginTop: 40,
        marginLeft: 90

    },

})