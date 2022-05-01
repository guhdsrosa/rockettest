import React from "react";
import {
    Text,
    View,
    Image,
    StatusBar,
    TouchableOpacity
} from "react-native";

import {style} from './style';
import { ButtonIcon } from "../../../global/button";
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import mcdonaldLogo from '../../assets/mcdonald.png';
import clipboard from '../../assets/clipboard.png';
import dish from '../../assets/bellconcierge.png';
import pizza from '../../assets/pizza.png';
import truck from '../../assets/truck.png';
import baskinRobbins from '../../assets/baskinRobbinsLogo.png'
import perfilphoto from '../../assets/perfil.png';

export function Perfil({navigation}){
    return(
        <View style={style.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <View style={style.photoView}>
                <View>
                    <Image 
                        source={perfilphoto}
                        style={style.photo}
                    />
                </View>
                <View style={style.bellStyle}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate('Notification')}}>
                        <IconMCI name="bell-outline" size={27} color='#fff'/>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={style.title}>
                <Text style={style.titleHi}>Hi, <Text style={style.titleName}>Gustavo!</Text></Text>
                <Text style={style.subtitle}>Get ready to breafast!</Text>
            </View>

            <View style={style.content}>

                {/* Bloco do Delivery */}
                <View style={style.contentFirst}> 
                    <Text style={style.textContentTitle}>Delivery</Text>
                    <Image 
                        source={mcdonaldLogo}
                        style={style.image}
                        resizeMode="stretch"
                    />
                    <View style={style.updateContent}>
                        <Text style={style.textContent}>
                            Update {'\n'}
                            at
                            <Text style={style.textContentbold}> 17.17</Text>
                        </Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <View style={style.iconStandartBorder}>
                                <Image 
                                    source={truck}
                                    style={style.iconStandart}
                                    resizeMode="contain"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Bloco do Recents */}
                <View style={style.contentSecond}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Image 
                            source={clipboard}
                            style={style.iconStandart}
                            resizeMode="contain"
                        />
                        <Text style={style.recentText}>Recent</Text>
                        <Text style={style.numberText}>
                            56 
                            <Text style={style.itemsText}>
                                Items
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.content}>

                {/* Bloco do Dine in */}         
                <View style={style.contentSecond}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Image 
                            source={dish}
                            style={style.iconStandart}
                            
                        />
                        <Text style={style.recentText}>Dine in</Text>
                        <Text style={style.numberText}>
                            10{' '}
                            <Text style={style.itemsText}>
                                book
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Bloco do Explore */}
                <View style={style.contentSecond}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate('Explore')}}>
                        <Image 
                            source={pizza}
                            style={style.iconStandart}
                            resizeMode= "contain"
                        />
                        <Text style={style.recentText}>Explore</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={style.notificationText}>4 New!</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Bloco das Ofertas */}
            <View style={style.offers}>
                <Text style={style.offersText}>Personal Offer</Text>
                <Text style={style.offersTextSee} onPress={() => navigation.navigate('SingIn')}>
                    See all <Text style={style.offersTextSeeArrow}>{'>'}</Text>
                </Text>
            </View>

            <View style={style.discount}>
                <Image 
                    source={baskinRobbins}
                    style={style.logoImage}
                    resizeMode= "contain"
                />
                <View>
                    <Text style={style.discountContent}>Discount up to</Text>
                    <Text style={style.discountPorcent}>20%</Text>
                    <Text style={style.discountContentGold}>4 Days remaining</Text>
                </View>

            </View>
            
        </View>
    )
}