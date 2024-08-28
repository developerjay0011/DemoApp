import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../theme/ThemeContext';

interface CustomImageProps {
    name?: any
    style?: any
    textstyles?: any
    onPress: () => void;
}

const MdButton: React.FC<CustomImageProps> = ({ name, style = {}, textstyles = {}, onPress = () => { } }) => {
    const { theme, fontFamily, fontSize } = useContext(ThemeContext);
    const styles = getStyles(theme, fontFamily, fontSize);

    return (
        <TouchableOpacity onPress={onPress} style={[styles?.button, style]} activeOpacity={.7}>
            <Text style={[styles?.text, textstyles]}>{name}</Text>
        </TouchableOpacity>
    );
};
const getStyles = (theme: any, fontFamily: any, fontSize: any,) => StyleSheet.create({
    text: {
        fontSize: fontSize?.[18],
        fontFamily: fontFamily?.FontB,
        color: theme.colors.button_text,
        width: "100%",
        textAlign: "center",
        textTransform: "capitalize"
    },
    button: {
        alignSelf: 'flex-start',
        height: 50,
        width: "100%",
        borderRadius: 12,
        backgroundColor: theme.colors?.button_bg,
        justifyContent: "center",
        alignItems: "center"
    },
});


export default MdButton;