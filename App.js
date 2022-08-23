import React from 'react';

import {LogBox} from 'react-native';

import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';

function App() {
  LogBox.ignoreLogs(['Reanimated 2']);
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

export default App;
