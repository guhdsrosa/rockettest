import React, {useState} from "react";
import {
    Image,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import {Badge} from 'react-native-elements'

import { style } from "./style";
import { ButtonIcon } from "../../../global/button";
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import pizzaFood from '../../assets/pizzaFood.png'

export function Explore({navigation}){

    const [like,setLike] = useState(0)
    const [cart,setCart] = useState(0)

    return(
        <View style={style.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <View style={style.header}>
                <ButtonIcon
                    title="<" 
                    activeOpacity={0.7}
                    onPress={() => {navigation.navigate('Perfil')}}
                />
                <View style={style.buttonRight}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate('Notification')}}>
                        <IconMCI name="bell-outline" size={27} color='#fff' style={style.iconBell}/>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity activeOpacity={0.7}>
                            <IconMCI name="basket" size={27} color='#323232' style={style.iconBasket}/>
                        </TouchableOpacity>
                        <Badge
                            value={cart}
                            status="warning"
                            containerStyle={{ position: 'absolute', top: -4, right: -12 }}
                        />
                    </View>
                </View>
            </View>

            <View style={style.explore}>
                <Text style={style.exploreText}>Explore</Text>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={style.exploreSeeAll}>See all {'>'}</Text>
                </TouchableOpacity>
            </View>

            <View style={style.content}>
                <View style={style.bar}></View>
                <View style={style.contentExplore}>
                    <Text style={style.topOrderText}>Top Order</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={style.newButton}>4 New! {'>'}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.contentFood}>
                <View style={style.bar}></View>
                <View style={style.contentFoodMenu}>
                    <Text style={style.foodTextTitle}>
                        Kue Dadar {'\n'}Mandar
                        <Text style={style.foodTextGramas}>350g</Text>
                    </Text>
                    <Image
                        source={pizzaFood}
                        style={style.pizzaPhoto}
                        resizeMode= "contain"
                    />
                </View>
                <View style={style.contentFoodPrice}>
                    <View style={style.contentFoodAmount}>
                        <IconMCI name="trash-can" size={27} color='#323232'/>
                        <Text style={style.textNumber}>1</Text>
                        <Text style={style.textPlus}>+</Text>
                    </View>
                    <Text style={style.contentPriceText}><Text style={style.contentDollarText}>$</Text>14.99</Text>
                </View>

                <View style={style.aboutContent}>
                    <Text style={style.aboutTitle}>About product</Text>
                    <Text style={style.aboutDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolores repellat? Blanditiis pariatur repellat quaerat, exercitationem ipsa vel ut laborum</Text>
                </View>

                <View style={style.addToCard}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {setCart(cart+1)}}>
                        <Text style={style.addToCardButton}>Add to cart</Text>
                    </TouchableOpacity>
                    <View style={style.heartButtonContent}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => setLike(like + 1)}>
                            <IconMCI
                                name="heart"
                                size={30}
                                color= '#fff'
                                style={style.heartButton}
                            />
                        </TouchableOpacity>
                        <Text style={{paddingLeft: 10, color: '#878787'}}>{like}</Text>
                    </View>
                    
                </View>
            </View>

        </View>
    )
}