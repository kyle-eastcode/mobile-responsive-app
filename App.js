import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  useEffect(() => {
    changeScreenOrientation();
  }, []);

  async function changeScreenOrientation() {
    await ScreenOrientation.unlockAsync()
  }

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>Up and Atom!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'orange',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
