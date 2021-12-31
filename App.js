import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import StylesPractice from './components/StylesPractice'
import Third from './components/Third';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <>
      {/* <StylesPractice /> */}
      {/* <Third /> */}
      {/* <Login /> */}
      <Register />
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
