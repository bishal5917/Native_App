import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { useState } from 'react';
import StylesPractice from './components/StylesPractice'
import Third from './components/Third';

export default function App() {
  return (
    <>
      {/* <StylesPractice /> */}
      <Third />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
