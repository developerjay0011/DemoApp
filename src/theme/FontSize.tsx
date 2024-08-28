import { PixelRatio } from 'react-native';
const fontScale = PixelRatio.getFontScale();

const responsiveFontSize = (multiplier: any) => {
    return multiplier / fontScale
};

export const fontSize = {
    20: responsiveFontSize(20),
};


