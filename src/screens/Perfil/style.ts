import { StyleSheet } from "react-native";
import { global } from '../../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        backgroundColor: global.colors.backgroundWhite,
        height: '100%'
    },

    //Foto e sino
    photoView: {
        marginTop: '14%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },

    photo: {
        backgroundColor: global.colors.backgroundPurple,
        width: 35,
        height: 35,
        textAlign: 'center',
        borderRadius: 7,
    },

    bellStyle: {
        backgroundColor: global.colors.backgroundPurple,
        paddingTop: 3,
        paddingBottom: 3,
        paddingHorizontal: 3,
        borderRadius: 4,
    },

    bell: {
        backgroundColor: global.colors.backgroundPurple,
        tintColor: '#ffffff',
        width: 35,
        height: 35,
        borderRadius: 7,
        flex: 1,
    },
    //\Foto e sino

    //Titulo de boas vindas
    title: {
        marginLeft: 30,
        marginTop: 10,
    },

    titleHi: {
        color: global.colors.greyColorTitle,
        fontSize: 30,
        fontWeight: 'bold'
    },

    titleName: {
        color: global.colors.goldenColor,
        fontSize: 30,
        fontWeight: 'bold'
    },

    subtitle: {
        color: global.colors.greyColorTitle,
        fontSize: 15
    },
    //\Titulo de boas vindas

    //Conteudo dos quadrados
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        marginTop: 20,
        
    },

    contentFirst: {
        backgroundColor: global.colors.backgroundPurple,
	    borderRadius: 20,
        
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 25,
        marginRight: 10,
        marginLeft: 10,

        shadowColor: global.colors.backgroundPurple,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },

    contentSecond: {
        backgroundColor: '#F0F0F0',
	    borderRadius: 20,
        
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 25,
        marginRight: 10,
        marginLeft: 10
    },

    textContentTitle: {
        color: global.colors.textWhite,
        fontWeight: '500',
        fontSize: 16,
        paddingBottom: 11,
    },

    image: {
        width: 30,
        height: 25,
        justifyContent: 'flex-start',
    },

    updateContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10
    },

    textContent: {
        color: global.colors.textWhite,
        fontWeight: '100',
    },

    textContentbold: {
        color: global.colors.textWhite,
        fontWeight: '500',
    },

    iconStandartBorder:{
        backgroundColor: global.colors.textWhite,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 4
    },

    iconStandart: {
        width: 23,
        height: 25,
    },

    recentText: {
        paddingTop: 10,
        fontWeight: '100',
    },

    numberText: {
        fontWeight: '600',
        fontSize: 25,
        paddingTop: 20
    },

    itemsText: {
        fontWeight: '100',
        fontSize: 20,
        paddingLeft: 4
    },

    notificationText: {
        color: global.colors.goldenColor,
        marginTop: 20,
        backgroundColor: '#FFD99A',
        fontWeight: 'bold',
        padding: 6,
        borderRadius: 15,
        marginRight: '25%',
        textAlign: 'center'
    },
    //\Conteudo dos quadrados

    //Ofertas
    offers: {
        marginLeft: 30,
        marginRight: 40,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    offersText: {
        fontSize: 17,
        fontWeight: '600',
        color: global.colors.greyColorTitle,
    },

    offersTextSee: {
        color: global.colors.goldenColor,
    },

    offersTextSeeArrow: {
        fontWeight: 'bold',
    },

    discount: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 70,
    },

    logoImage:{
        height: 79,
        width: 90,
        marginLeft: 30,
        marginRight: 30
    },

    discountContent: {
        color: global.colors.greyColor,
        fontWeight: '400'
    },

    discountPorcent: {
        fontSize: 30,
        fontWeight: '600',
        color: global.colors.greyColorTitle,
    },

    discountContentGold: {
        color: global.colors.goldenColor,
        paddingTop: 3,
        marginBottom: 50
    },
    //\Ofertas

    //Footer

    
})