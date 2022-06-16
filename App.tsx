import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({children}: any) =>{
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <MyStack />
      </AppState>
    </NavigationContainer>
  );
}