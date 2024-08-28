import React, { } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { ThemeProvider } from './src/theme/ThemeContext';
import MainNavigator from './src/navigation/MainNavigator';
import Toast from 'react-native-toast-message';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider  >
        <MainNavigator />
      </ThemeProvider>
      <Toast position='bottom' bottomOffset={20} />
    </Provider>
  );
};

export default App;