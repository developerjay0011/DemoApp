// ThemeContext.tsx
import React, { createContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { lightTheme, darkTheme, Theme } from './themes';
import { fontSize } from './FontSize';
import { fontFamily } from './FontFamily';
import { useColorScheme } from 'react-native';
import { get, save } from '../utils/storage';

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
    fontSize: any,
    fontFamily: any,
    setSkeleton: any,
    skeleton: any,
    theme_type?: any
    is_light?: any
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: darkTheme,
    fontSize: fontSize,
    fontFamily: fontFamily,
    toggleTheme: () => { },
    setSkeleton: () => { },
    theme_type: "dark",
    skeleton: {
        home_card: false,
        home_topic: false,
    }
});

interface ThemeProviderProps {
    children: ReactNode;
    theme_type?: any
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: any) => {
    const appearance: any = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<Theme>(appearance == "dark" ? darkTheme : lightTheme);
    const [isdark, setIsdark] = useState<any>(appearance == "dark");
    const [skeleton, setSkeleton] = useState<any>({
        home_card: true,
        topic: true,
    });

    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await get('Theme');
            const isDark = savedTheme === 'dark';
            setIsdark(isDark);
            setCurrentTheme(isDark ? darkTheme : lightTheme);
        };
        loadTheme();
    }, []);

    const toggleTheme = () => {
        (async () => {
            await save('Theme', !isdark ? 'dark' : "light");
            setIsdark(!isdark)
            setCurrentTheme(!isdark ? darkTheme : lightTheme);
        })()

    };

    return (
        <ThemeContext.Provider value={{
            theme: currentTheme,
            is_light: currentTheme === lightTheme,
            toggleTheme: () => { toggleTheme() },
            fontSize: fontSize,
            fontFamily: fontFamily,
            setSkeleton: (val: any) => setSkeleton({ ...skeleton, ...val }),
            skeleton: skeleton
        }}>
            {children}
        </ThemeContext.Provider>
    );
};