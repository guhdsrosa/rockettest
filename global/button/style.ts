import { StyleSheet } from 'react-native';
import { global } from '../styles/global';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: global.colors.buttonColor,
        borderRadius: 7,
        width: 30,
        height: 30,
        alignItems: 'center',
    },

    title: {
        color: global.colors.textWhite,
        fontSize: 20
    }
})