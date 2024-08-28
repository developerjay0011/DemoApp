import { StyleSheet } from 'react-native';

export const getStyles = (theme: any, fontFamily: any, fontSize: any) => StyleSheet.create({
    removefilter: {
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: theme?.colors?.reverse_bg,
        height: 45,
        width: 45,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        justifyContent: "center",
        alignContent: "center",
        zIndex: 1000
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: theme?.colors?.background,
        alignSelf: "center"
    }
});