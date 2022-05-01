import { StyleSheet } from "react-native";
import { global } from "../../../global/styles/global";

export const style = StyleSheet.create({   
    //Cabeçalho dos botões
    container: {
        backgroundColor: global.colors.backgroundWhite,
    },

    bar:{
        backgroundColor: '#9999C5',
        width: 80,
        height: 5,
        position: 'absolute',
        borderRadius: 10,
        marginLeft: 150,
        marginTop: 15
    },

    header: {
        marginTop: 60,
        marginBottom:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },

    buttonRight:{
        flexDirection: 'row',
    },
    //\Cabeçalho dos botões

    //Icones
    iconBell:{
        backgroundColor: global.colors.backgroundPurple,
        paddingTop: 2,
        paddingBottom: 2,
        paddingHorizontal: 2,
        borderRadius: 4,
    },

    iconBasket:{
        marginLeft: 15,
    },
    //\Icones

    //explore text
    explore:{
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
        alignItems: 'center'
    },

    exploreText:{
        fontSize: 30,
        fontWeight: '600',
        color: global.colors.greyColorTitle
    },

    exploreSeeAll:{
        color: global.colors.goldenColor,
        fontSize: 15,
        fontWeight: '600',
    },
    //\explore text

    //conteudoORDER
    content:{
        backgroundColor: global.colors.backgroundPurple,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '77%'
    },

    contentExplore:{
        marginHorizontal: 30,
        marginTop: 60,
        marginBottom: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    topOrderText:{
        fontWeight: '600',
        fontSize: 30,
        color: global.colors.textWhite
    },

    newButton:{
        backgroundColor: global.colors.goldenColor,
        color: global.colors.textWhite,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 13,
        fontWeight: 'bold',
    },
    //\conteudoORDER

    //Cardapio
    contentFood:{
        position: 'absolute',
        backgroundColor: global.colors.backgroundWhite,
        width: '100%',
        height: '100%', //REVER 
        marginTop: 350,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    contentFoodMenu:{
        marginHorizontal: 30,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    //Texto cardapio

    foodTextTitle:{
        color: global.colors.greyColorTitle,
        fontSize: 35,
        fontWeight: '600'
    },

    foodTextGramas:{
        fontSize: 15,
        marginLeft: 25
    },

    pizzaPhoto: {
        height: 170,
        width: 170,
    },

    contentFoodPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },

    contentFoodAmount: {
        flexDirection: 'row',
    },

    textPlus:{
        color:'#FF8F00', 
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },

    textNumber:{
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: global.colors.greyColorTitle
    },

    contentPriceText: {
        fontSize: 30,
        fontWeight: '700',
        color: global.colors.greyColorTitle
    },

    contentDollarText: {
        fontSize: 14,
        color: global.colors.greyColor,
        textAlignVertical: 'top',
    },

    //ABOUT
    aboutContent: {
        marginHorizontal: 30
    },

    aboutTitle: {
        fontSize: 19,
        color: global.colors.greyColorTitle,
        fontWeight: '700'
    },

    aboutDescription: {
        color: global.colors.greyColor,
        fontSize: 15,
        marginTop: 7
    },
    
    //Add to Card
    addToCard:{
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
        alignItems: 'center',
    },

    addToCardButton:{
        backgroundColor: global.colors.backgroundPurple,
        color: global.colors.textWhite,
        fontSize: 15,
        paddingHorizontal: 80,
        paddingVertical: 15,
        borderRadius: 26,

        shadowColor: global.colors.backgroundPurple,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },

    heartButtonContent:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    heartButton:{
        backgroundColor: global.colors.goldenColor,
        paddingHorizontal: 4,
        paddingVertical: 4,
        borderRadius: 10
    }
})