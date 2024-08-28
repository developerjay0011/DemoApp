import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { GlobalStyles } from '../../styles/globalStyles';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../theme/ThemeContext';

type Props = {
  navigation: any; // Replace 'any' with correct type if using typed navigation
  fetchNewsList?: any
  fetchTopicList?: any
};

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const { theme, fontFamily, fontSize } = useContext(ThemeContext);
  const styles = getStyles(theme, fontFamily, fontSize);
  const globalstyles = GlobalStyles(theme, fontFamily, fontSize);
  const dispatch = useDispatch() as any
  const zoomOut = {
    0: {
      opacity: 0,
      scale: 0,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  useEffect(() => {
    setTimeout(() => { navigation.replace('Home') }, 1100);
  }, [dispatch, navigation]);

  return (
    <SafeAreaView style={[globalstyles.container, { justifyContent: "center", alignItems: "center" }]}>
      <Animatable.Image
        style={styles.tinyLogo}
        source={require('../../assets/images/logo.jpeg')}
        animation={zoomOut}
      />
    </SafeAreaView>
  );
};

const getStyles = (theme: any, fontFamily: any, fontSize: any) => StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: fontSize?.[15],
    color: theme?.colors?.text,
    fontFamily: fontFamily?.FontB,
  },
});

export default SplashScreen;
