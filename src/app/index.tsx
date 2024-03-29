import { StatusBar } from 'expo-status-bar';
import { 
    FlatList, 
    StyleSheet, 
    SafeAreaView
} from 'react-native';
import DayListItem from '@components/core/DayListItem';

// Font imports
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {AmaticSC_400Regular, AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc";

// Splash Screen Imports
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Dynamic data for out mini projects.
const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    InterBlack: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold
  });



  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => (
          <DayListItem day={item} />
        )}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
      />

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10
  },
  column: {
    gap: 10
  },

});
