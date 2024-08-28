import { DefaultTheme, DarkTheme as NavigationDarkTheme, Theme as NavigationTheme } from '@react-navigation/native';

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'rgb(247,247,252)',
        black: "black"
    },
};

export const darkTheme = {
    ...NavigationDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        background: 'rgb(18,18,18)',
        text: 'white',
        black: "black"
    },
};

export type Theme = typeof lightTheme;