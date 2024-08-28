import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import { ThemeContext } from '../theme/ThemeContext';
import { navigationRef } from './RootNavigation';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch() as any

  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
