import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGamesScreen from './screens/StartGamesScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { Dark_color, Light_color, } from './components/Colors';

export default function App() {
  return (
    <LinearGradient colors={['#0de2c2', '#11e20d']} style={styles.root}>
      <ImageBackground source={require('./assets/guess.png')} resizeMode='cover' style={styles.root} imageStyle={styles.imageStyle}>
        <SafeAreaView style={styles.root}>
          <StartGamesScreen />

        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15

  }
});
