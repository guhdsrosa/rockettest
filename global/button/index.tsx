import React from "react";
import{
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps,
}from 'react-native';

import { styles } from './style';

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest } : Props){
    return(
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>  
    )
}