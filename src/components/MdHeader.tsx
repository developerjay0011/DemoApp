//import liraries
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ThemeContext } from '../theme/ThemeContext';

// create a component
const MDHeader = ({ title }: any) => {
    const { theme, fontFamily, fontSize, }: any = useContext(ThemeContext);
    const styles = getStyles(theme, fontFamily, fontSize);
    const navigation = useNavigation() as any;
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 25, flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
                <Text style={[styles.header]}>{title}</Text>
            </View>
        </View>
    );
};

const getStyles = (theme: any, fontFamily: any, fontSize: any) => StyleSheet.create({
    header: {
        fontSize: fontSize?.[20],
        width: "100%",
        color: theme.colors.black,
        fontFamily: fontFamily?.FontB,
        textAlign: "center",
    },
    container: {
        zIndex: 200,
        backgroundColor: 'white',
        height: 55,
        position: "relative",
        justifyContent: "center",
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
});
export default MDHeader;
