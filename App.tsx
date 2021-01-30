import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/components/OnBoarding/Welcome';
import { ThemeProvider } from "@shopify/restyle";
import { theme } from './src/components';

export type AppStackRoutes = {
  OnBoarding: undefined;
  Question: undefined
}

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <Welcome />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
