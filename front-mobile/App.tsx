import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />lsls
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
