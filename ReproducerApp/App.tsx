import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const { fontScale } = useWindowDimensions();
  const safeArea = useSafeAreaInsets()
  return (
    <View style={[styles.container, safeArea]}>
      <Text>Font Scale: {fontScale}</Text>
      <View style={{ gap: 8, marginTop: 16 }}>
        <Text style={{ lineHeight: 20, backgroundColor: 'red' }}>
          lineHeight: 20
        </Text>
        <Text
          maxFontSizeMultiplier={1.5}
          style={{ lineHeight: 20, backgroundColor: 'red' }}
        >
          maxFontSizeMultiplier: 1.5 | lineHeight: 20
        </Text>
        <Text
          maxFontSizeMultiplier={1}
          style={{ lineHeight: 20, backgroundColor: 'red' }}
        >
          maxFontSizeMultiplier: 1 | lineHeight: 20
        </Text>
        <Text
          maxFontSizeMultiplier={1}
          style={{ backgroundColor: 'red' }}
        >
          maxFontSizeMultiplier: 1
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App;
